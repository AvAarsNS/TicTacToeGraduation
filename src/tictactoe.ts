import { Board } from "./board";
import { Mark } from "./cell";

export class TicTacToe {
  private board: Board;

  constructor() {
    this.board = new Board(3, 3);
  }

  place(mark: Mark, row: number, column: number) {
    this.board.place(mark, row, column);

    return `Placed ${mark} at (${row}, ${column})`;
  }
}
