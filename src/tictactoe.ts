import { Board, Diagonal } from "./board";
import { Cell, Mark } from "./cell";

export function allValuesAre(cells: Cell[], mark: Mark) {
  return cells.every((cell) => cell.getValue() === mark);
}

export function isOnDiagonal(
  row: number,
  column: number
): Diagonal | "both" | "none" {
  if (row === 1 && column === 1) return "both";

  if (row === column) return "\\";

  if ((row === 0 && column === 2) || (row === 2 && column === 0)) return "/";

  return "none";
}

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
    const linesToCheck: Cell[][] = [];
    linesToCheck.push(this.board.getRow(row));
    linesToCheck.push(this.board.getColumn(column));

    const diagonal = isOnDiagonal(row, column);

    if (diagonal === "/" || diagonal === "both") {
      linesToCheck.push(this.board.getDiagonal("/"));
    }
    if (diagonal === "\\" || diagonal === "both") {
      linesToCheck.push(this.board.getDiagonal("\\"));
    }

    console.log(linesToCheck);

    return linesToCheck.some((line) => allValuesAre(line, mark));
  }
}
