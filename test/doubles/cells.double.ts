import { Cell } from "../../src/cell";

export const allCellsEmpty = () => [new Cell(), new Cell(), new Cell()];
export const allCellsX = () => {
  const cells = [new Cell(), new Cell(), new Cell()];
  cells.forEach((cell) => cell.place("X"));
  return cells;
};

export const allCellsO = () => {
  const cells = [new Cell(), new Cell(), new Cell()];
  cells.forEach((cell) => cell.place("O"));
  return cells;
};

export const mixedCells = () => {
  const cells = [new Cell(), new Cell(), new Cell()];
  cells[0].place("O");

  cells[2].place("X");

  return cells;
};

export const firstRow = () => {
  const row = [new Cell(), new Cell(), new Cell()];
  row[0].place("X");
  row[2].place("O");
  return row;
};

export const thirdRow = () => {
  const row = [new Cell(), new Cell(), new Cell()];
  row[0].place("O");
  return row;
};

export const firstColumn = () => {
  const column = [new Cell(), new Cell(), new Cell()];
  column[0].place("X");
  column[1].place("O");
  column[2].place("O");
  return column;
};

export const thirdColumn = () => {
  const column = [new Cell(), new Cell(), new Cell()];
  column[0].place("O");
  column[1].place("X");
  return column;
};

export const topLeftDiagonal = () => {
  const diagonal = [new Cell(), new Cell(), new Cell()];
  diagonal[0].place("X");
  return diagonal;
};

export const topRightDiagonal = () => {
  const diagonal = [new Cell(), new Cell(), new Cell()];
  diagonal[0].place("O");
  diagonal[2].place("O");
  return diagonal;
};
