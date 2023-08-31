/* eslint-disable @typescript-eslint/dot-notation */
import { TicTacToe } from "../../src/tictactoe";
import { Board } from "../../src/board";
import { Mark } from "../../src/cell";

jest.mock("../../src/board");

describe("This is a test suite for units of the TicTacToe game", () => {
  it("A new game should create a new board, of 3x3 squares", () => {
    const game = new TicTacToe();

    expect(Board).toBeCalledWith(3, 3);
    expect(game["board"]).not.toBeUndefined();
  });

  describe("A player should be able to place its mark at a given position", () => {
    let game = new TicTacToe();

    beforeEach(() => {
      game = new TicTacToe();
    });

    it("Putting a mark somewhere should only place a mark once", () => {
      game.place("X", 0, 0);
      expect(game["board"].place).toBeCalledTimes(1);
    });

    describe("A player should be able to place a mark, resulting in readable output when", () => {
      test.each([
        ["X", 0, 0],
        ["O", 1, 0],
        ["X", 2, 2],
      ] as [Mark, number, number][])(
        "placing an %s at (%i, %i)",
        (mark, row, column) => {
          const result = game.place(mark, row, column);

          expect(game["board"].place).toBeCalledWith(mark, row, column);
          expect(result).toEqual(`Placed ${mark} at (${row}, ${column})`);
        }
      );
    });
  });
});
