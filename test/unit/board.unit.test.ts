/* eslint-disable @typescript-eslint/dot-notation */
import { Board } from "../../src/board";
import { Cell } from "../../src/cell";

jest.mock("../../src/cell");

describe("This is a test suite for the units of the board class", () => {
  describe("A new board should create empty cells in a grid, with the given size", () => {
    describe("A 3x3 board", () => {
      const board = new Board(3, 3);

      it("should contain 3 rows", () => {
        expect(board["board"].length).toEqual(3);
      });
      it("should contain 3 columns", () => {
        board["board"].every((row) => expect(row.length).toBe(3));
      });
      it("should have all new cells", () => {
        expect(
          board["board"].flat().every((cell) => cell instanceof Cell)
        ).toBeTruthy();
      });
    });
  });
});
