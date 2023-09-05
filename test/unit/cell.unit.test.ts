/* eslint-disable @typescript-eslint/dot-notation */
import { Cell, Mark } from "../../src/cell";

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
      expect(cell.toString()).toEqual("X");
    });

    it("place an O", () => {
      cell.place("O");

      expect(cell.getValue()).toEqual("O");
      expect(cell.toString()).toEqual("O");
    });

    it("an empty cell should be formatted as a space", () => {
      expect(cell.getValue()).toBeUndefined();
      expect(cell.toString()).toEqual(" ");
    });
  });

  describe("A cell should be able to tell if it is occupied", () => {
    it("empty -> not occupied", () => {
      expect(cell.occupied()).toBeFalsy();
    });
    it("X placed -> occupied", () => {
      cell.place("X");
      expect(cell.occupied()).toBeTruthy();
    });
    it("O placed -> occupied", () => {
      cell.place("O");
      expect(cell.occupied()).toBeTruthy();
    });
  });

  describe("A cell should throw an error when it is already occupied", () => {
    test.each([
      ["X", "X"],
      ["X", "O"],
      ["O", "X"],
      ["O", "O"],
    ] as [Mark, Mark][])(
      "Place an %s, then an %s",
      (first: Mark, second: Mark) => {
        cell.place(first);
        expect(() => cell.place(second)).toThrow("Cell is already occupied");
      }
    );
  });
});
