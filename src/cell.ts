export type Mark = "X" | "O";

export class Cell {
  private value?: Mark;

  place(mark: Mark) {
    if (this.occupied()) throw new Error("Cell is already occupied");
    this.value = mark;
  }

  getValue() {
    return this.value;
  }

  toString() {
    return this.value || " ";
  }

  occupied() {
    return this.value !== undefined;
  }
}
