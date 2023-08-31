/* eslint-disable @typescript-eslint/dot-notation */
import { Board } from "../../src/board";
import { Cell } from "../../src/cell";
import { filledBoard } from "../doubles/board.double";
import {
  firstColumn,
  firstRow,
  thirdColumn,
  thirdRow,
} from "../doubles/cells.double";

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

  describe("The board should be able to return a specific row", () => {
    const board = filledBoard();

    it("retrieving the first row", () => {
      const expectedRow = firstRow();
      expect(
        board
          .getRow(0)
          .every(
            (cell, index) => cell.getValue() === expectedRow[index].getValue()
          )
      ).toBeTruthy();
    });

    it("retrieving the third row", () => {
      const expectedRow = thirdRow();
      expect(
        board
          .getRow(2)
          .every(
            (cell, index) => cell.getValue() === expectedRow[index].getValue()
          )
      ).toBeTruthy();
    });
  });

  describe("The board should be able to return a specific column", () => {
    const board = filledBoard();

    it("retrieving the first column", () => {
      const expectedColumn = firstColumn();
      expect(
        board
          .getColumn(0)
          .every(
            (cell, index) =>
              cell.getValue() === expectedColumn[index].getValue()
          )
      ).toBeTruthy();
    });

    it("retrieving the third column", () => {
      const expectedColumn = thirdColumn();
      expect(
        board
          .getColumn(2)
          .every(
            (cell, index) =>
              cell.getValue() === expectedColumn[index].getValue()
          )
      ).toBeTruthy();
    });
  });
});
