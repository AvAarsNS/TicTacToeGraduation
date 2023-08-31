import { Board } from "./board";
import { Mark } from "./cell";
import { allValuesAre } from "./utility";

export class TicTacToe {
  private board: Board;

  constructor() {
    this.board = new Board(3, 3);
  }

  place(mark: Mark, row: number, column: number) {
    this.board.place(mark, row, column);

    if (this.hasWinAt(mark, row, column)) {
      return `Player ${mark} wins`;
    }

    return `Placed ${mark} at (${row}, ${column})`;
  }

  hasWinAt(mark: Mark, row: number, column: number) {
    const rowCells = this.board.getRow(row);
    const columnCells = this.board.getColumn(column);

    return allValuesAre(rowCells, mark) || allValuesAre(columnCells, mark);
  }
}
