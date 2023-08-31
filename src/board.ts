import { Cell } from "./cell";

export class Board {
  private board: Cell[][];

  constructor(rows: number, colums: number) {
    this.board = new Array(rows)
      .fill(null)
      .map(() => new Array(colums).fill(null).map(() => new Cell()));
  }
}
