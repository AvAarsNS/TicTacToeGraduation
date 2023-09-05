/* eslint-disable @typescript-eslint/dot-notation */
import { Board } from "../../src/board";
import { Cell } from "../../src/cell";
import { filledBoard, fullBoard } from "../doubles/board.double";
import {
  firstColumn,
  firstRow,
  thirdColumn,
  thirdRow,
  topLeftDiagonal,
  topRightDiagonal,
} from "../doubles/cells.double";

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

      board
        .getColumn(0)
        .forEach((cell, index) =>
          expect(cell.getValue()).toBe(expectedColumn[index].getValue())
        );
    });

    it("retrieving the third column", () => {
      const expectedColumn = thirdColumn();

      board
        .getColumn(2)
        .forEach((cell, index) =>
          expect(cell.getValue()).toBe(expectedColumn[index].getValue())
        );
    });
  });

  describe("The board should be able to return the diagonals", () => {
    const board = filledBoard();

    it("retrieving the \\ diagonal", () => {
      const expectedDiagonal = topLeftDiagonal();

      board
        .getDiagonal("\\")
        .forEach((cell, index) =>
          expect(cell.getValue()).toBe(expectedDiagonal[index].getValue())
        );
    });

    it("retrieving the / diagonal", () => {
      const expectedDiagonal = topRightDiagonal();

      board
        .getDiagonal("/")
        .forEach((cell, index) =>
          expect(cell.getValue()).toBe(expectedDiagonal[index].getValue())
        );
    });
  });

  describe("The board should be able to determine if it is completely full", () => {
    it("an empty board is not full", () => {
      const board = new Board(3, 3);

      expect(board.isFull()).toBeFalsy();
    });
    it("a half filled board is not full", () => {
      const board = filledBoard();

      expect(board.isFull()).toBeFalsy();
    });
    it("an empty board is not full", () => {
      const board = fullBoard();

      expect(board.isFull()).toBeTruthy();
    });
  });
});
