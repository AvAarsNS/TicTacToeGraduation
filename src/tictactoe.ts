import { Board } from "./board";

export class TicTacToe {
  private board: Board;

  constructor() {
    this.board = new Board(3, 3);
  }
}
