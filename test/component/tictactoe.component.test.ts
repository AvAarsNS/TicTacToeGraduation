/* eslint-disable @typescript-eslint/dot-notation */
import { TicTacToe } from "../../src/tictactoe";
import { Board } from "../../src/board";

jest.mock("../../src/board");

describe("This is a test suite for units of the TicTacToe game", () => {
  it("A new game should create a new board, of 3x3 squares", () => {
    const game = new TicTacToe();

    expect(Board).toBeCalledWith(3, 3);
    expect(game["board"]).not.toBeUndefined();
  });
});
