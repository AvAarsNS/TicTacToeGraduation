import { Diagonal } from "./board";
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
