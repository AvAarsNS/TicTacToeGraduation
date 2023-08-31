import { Board } from "../../src/board";

export const filledBoard = () => {
  const board = new Board(3, 3);

  board.place("X", 0, 0);
  board.place("O", 1, 0);
  board.place("O", 2, 0);
  board.place("O", 0, 2);
  board.place("X", 1, 2);
  board.place("X", 2, 2);

  return board;
};
