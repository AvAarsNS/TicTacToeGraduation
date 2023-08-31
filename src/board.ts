import { Cell, Mark } from "./cell";

export type Diagonal = "\\" | "/";

export class Board {
  private cells: Cell[][];

  constructor(rows: number, colums: number) {
    this.cells = new Array(rows)
      .fill(null)
      .map(() => new Array(colums).fill(null).map(() => new Cell()));
  }

  place(mark: Mark, row: number, column: number) {
    this.cells[row][column].place(mark);
  }

  getRow(row: number) {
    return this.cells[row];
  }

  getColumn(column: number) {
    return this.cells.map((row) => row[column]);
  }

  getDiagonal(direction: Diagonal) {
    const width = this.cells[0].length;
    if (direction === "\\") {
      return this.cells.map((row, index) => row[index]);
    }

    return this.cells.map((row, index) => row[width - 1 - index]);
  }
}
