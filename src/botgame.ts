import { Mark } from "./cell";
import { TicTacToe } from "./tictactoe";

export function generateRandomCoordinate() {
  return Math.floor(Math.random() * 3);
}

export class BotGame {
  private game: TicTacToe;

  private activeMark: Mark;

  constructor(game: TicTacToe) {
    this.game = game;
    this.activeMark = "X";
  }

  play() {
    const steps: string[] = [];
    while (!this.game.finished()) {
      try {
        const row = generateRandomCoordinate();
        const column = generateRandomCoordinate();

        steps.push(this.game.place(this.activeMark, row, column));

        this.switchActiveMark();
      } catch (e) {
        // Let's just try again
      }
    }

    return steps;
  }

  switchActiveMark() {
    this.activeMark = this.activeMark === "X" ? "O" : "X";
  }
}
