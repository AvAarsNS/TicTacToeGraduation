/* eslint-disable @typescript-eslint/dot-notation */
import { TicTacToe } from "../../src/tictactoe";
import { Board } from "../../src/board";
import { Mark } from "../../src/cell";

import { allValuesAre } from "../../src/utility";
import { allCellsEmpty } from "../doubles/cells.double";

jest.mock("../../src/board");
jest.mock("../../src/cell");
jest.mock("../../src/utility");

describe("This is a test suite for components of the TicTacToe game", () => {
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

  describe("When a player places a mark, the game", () => {
    const game = new TicTacToe();
    const spiedWinMethod = jest.spyOn(game, "hasWinAt");

    afterAll(() => {
      spiedWinMethod.mockRestore();
    });

    it("should check if that results in a victory", () => {
      game.place("X", 1, 1);
      expect(spiedWinMethod).toHaveBeenCalledWith("X", 1, 1);
    });

    it("and return readable outpuy if that results in a victory", () => {
      spiedWinMethod.mockReturnValueOnce(true);
      const result = game.place("X", 1, 1);
      expect(result).toEqual("Player X wins");
    });
  });

  describe("When checking for a win, ", () => {
    describe.each([
      ["X", 0, 0],
      ["O", 1, 2],
      ["X", 2, 1],
    ] as [Mark, number, number][])(
      "and the last played mark was %s at (%i, %i), the game",
      (mark, row, column) => {
        const game = new TicTacToe();
        const fakeRow = allCellsEmpty();
        const fakeColumn = allCellsEmpty();
        const mockedBoard = game["board"] as jest.Mocked<Board>;

        beforeAll(() => {
          jest.resetAllMocks();

          mockedBoard.getRow.mockReturnValueOnce(fakeRow);
          mockedBoard.getColumn.mockReturnValueOnce(fakeColumn);

          game["hasWinAt"](mark, row, column);
        });

        it("should retrieve the row from the board", () => {
          expect(game["board"].getRow).toHaveBeenCalledWith(row);
        });

        it("should retrieve the column from the board", () => {
          expect(game["board"].getColumn).toHaveBeenCalledWith(column);
        });

        it("should check if the row is filled with the players mark", () => {
          expect(allValuesAre).toBeCalledWith(fakeRow, mark);
        });

        it("should check if the column is filled with the players mark", () => {
          expect(allValuesAre).toBeCalledWith(fakeColumn, mark);
        });
      }
    );
    describe("and the game checks the row and column", () => {
      const game = new TicTacToe();
      const mockedAllValuesAre = allValuesAre as jest.MockedFn<
        typeof allValuesAre
      >;

      afterAll(() => {
        mockedAllValuesAre.mockReset();
      });

      it("when both are filled with the last played mark -> win", () => {
        mockedAllValuesAre.mockReturnValue(true);
        const result = game["hasWinAt"]("X", 1, 1);
        expect(result).toBeTruthy();
      });

      it("one of them filled with the last played mark -> win", () => {
        mockedAllValuesAre.mockReturnValueOnce(false).mockReturnValueOnce(true);

        const result = game["hasWinAt"]("O", 2, 2);
        expect(result).toBeTruthy();
      });

      it("both are NOT filled with the last played mark -> no win", () => {
        mockedAllValuesAre.mockReturnValue(false);
        const result = game["hasWinAt"]("O", 2, 2);
        expect(result).toBeFalsy();
      });
    });
  });
});
