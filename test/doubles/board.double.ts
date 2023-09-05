import { Board } from "../../src/board";

export const filledBoard = () => {
  const board = new Board(3, 3);

  board.place("X", 0, 0);
  board.place("O", 1, 0);
  board.place("O", 2, 0);
  board.place("O", 0, 2);
  board.place("X", 1, 2);

  return board;
};

export const fullBoard = () => {
  const board = new Board(3, 3);

  board.place("X", 1, 1);
  board.place("O", 0, 1);
  board.place("X", 0, 0);
  board.place("O", 2, 2);
  board.place("X", 0, 2);
  board.place("O", 2, 0);
  board.place("X", 1, 0);
  board.place("O", 1, 2);
  board.place("X", 2, 1);

  return board;
};
