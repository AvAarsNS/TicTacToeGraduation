/* eslint-disable @typescript-eslint/dot-notation */
import { Cell } from "../../src/cell";

describe("This is a test suite for the units of the cell class", () => {
  it("A cell should be initialized containing nothing", () => {
    const cell = new Cell();

    expect(cell["value"]).toBeUndefined();
  });
});
