/* eslint-disable @typescript-eslint/dot-notation */
import { Cell } from "../../src/cell";

describe("This is a test suite for the units of the cell class", () => {
  it("A cell should be initialized containing nothing", () => {
    const cell = new Cell();

    expect(cell["value"]).toBeUndefined();
  });

  describe("A mark should be able to be put in a cell", () => {
    let cell = new Cell();

    beforeEach(() => {
      cell = new Cell();
    });

    it("place a X", () => {
      cell.place("X");

      expect(cell["value"]).toEqual("X");
    });

    it("place an O", () => {
      cell.place("O");

      expect(cell["value"]).toEqual("O");
    });
  });
});
