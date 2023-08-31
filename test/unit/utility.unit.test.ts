import { allValuesAre, isOnDiagonal } from "../../src/utility";
import { allCellsEmpty, allCellsX, mixedCells } from "../doubles/cells.double";

describe("This is a test suite for utility functions", () => {
  describe("We should be able to determine if all cells in a given row/column are equal to the last played mark", () => {
    describe("When examining 3 cells, checking for X and the input cells contain", () => {
      it("nothing -> no", () => {
        const cells = allCellsEmpty();

        expect(allValuesAre(cells, "X")).toBeFalsy();
      });

      it("all Xes -> yes", () => {
        const cells = allCellsX();

        expect(allValuesAre(cells, "X")).toBeTruthy();
      });

      it("mixed values -> no", () => {
        const cells = mixedCells();

        expect(allValuesAre(cells, "X")).toBeFalsy();
      });
    });
  });
  describe("We should be able to determine if a coordinate is on a diagonal", () => {
    it("The top left coordinate is on the \\ diagonal", () => {
      expect(isOnDiagonal(0, 0)).toEqual("\\");
    });
    it("The bottom right coordinate is on the \\ diagonal", () => {
      expect(isOnDiagonal(2, 2)).toEqual("\\");
    });
    it("The top right coordinate is on the / diagonal", () => {
      expect(isOnDiagonal(0, 2)).toEqual("/");
    });
    it("The bottom left coordinate is on the / diagonal", () => {
      expect(isOnDiagonal(2, 0)).toEqual("/");
    });
    it("The center coordinate is on both diagonals", () => {
      expect(isOnDiagonal(1, 1)).toEqual("both");
    });
    it("The middle top coordinate is not on a diagonal", () => {
      expect(isOnDiagonal(0, 1)).toEqual("none");
    });
  });
});
