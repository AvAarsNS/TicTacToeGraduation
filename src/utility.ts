import { Cell, Mark } from "./cell";

export const allValuesAre = (cells: Cell[], mark: Mark) =>
  cells.every((cell) => cell.getValue() === mark);
