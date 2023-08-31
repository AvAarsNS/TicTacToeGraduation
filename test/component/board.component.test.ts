/* eslint-disable @typescript-eslint/dot-notation */
import { Board } from "../../src/board";
import { Mark } from "../../src/cell";

jest.mock("../../src/cell");

describe("This is a test suite for the components of the board class", () => {
  describe("Marks should be able to be placed in the cells,", () => {
    const board = new Board(3, 3);
    test.each([
      ["X", 0, 0],
      ["O", 1, 0],
      ["X", 2, 2],
    ] as [Mark, number, number][])(
      "placing an %s at (%i, %i)",
      (mark, row, column) => {
        board.place(mark, row, column);

        expect(board["cells"][row][column].place).toBeCalledWith(mark);
      }
    );
  });
});
