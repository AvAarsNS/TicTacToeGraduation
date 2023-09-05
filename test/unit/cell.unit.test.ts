/* eslint-disable @typescript-eslint/dot-notation */
import { Cell } from "../../src/cell";

let cell = new Cell();

beforeEach(() => {
  cell = new Cell();
});

describe("This is a test suite for the units of the cell class", () => {
  it("A cell should be initialized containing nothing", () => {
    expect(cell["value"]).toBeUndefined();
  });

  describe("A mark should be able to be put in a cell and return that value when asked", () => {
    it("place a X", () => {
      cell.place("X");

      expect(cell.getValue()).toEqual("X");
    });

    it("place an O", () => {
      cell.place("O");

      expect(cell.getValue()).toEqual("O");
    });
  });

  describe("A cell should be able to tell if it is filled", () => {
    it("empty -> not filled", () => {
      expect(cell.isFilled()).toBeFalsy();
    });
    it("X placed -> filled", () => {
      cell.place("X");
      expect(cell.isFilled()).toBeTruthy();
    });
    it("O placed -> filled", () => {
      cell.place("O");
      expect(cell.isFilled()).toBeTruthy();
    });
  });
});
