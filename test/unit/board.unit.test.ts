/* eslint-disable @typescript-eslint/dot-notation */
import { Board } from "../../src/board";
import { Cell } from "../../src/cell";

jest.mock("../../src/cell");

describe("This is a test suite for the units of the board class", () => {
  describe("A new board should create empty cells in a grid, with the given size", () => {
    describe("A 3x3 board", () => {
      const board = new Board(3, 3);

      it("should contain 3 rows", () => {
        expect(board["cells"].length).toEqual(3);
      });
      it("should contain 3 columns", () => {
        board["cells"].every((row) => expect(row.length).toBe(3));
      });
      it("should have all new cells", () => {
        expect(
          board["cells"].flat().every((cell) => cell instanceof Cell)
        ).toBeTruthy();
      });
    });
  });
});
