import { allValuesAre } from "../../src/utility";
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
});
