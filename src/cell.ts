export type Mark = "X" | "O";

export class Cell {
  private value?: Mark;

  place(mark: Mark) {
    this.value = mark;
  }

  getValue() {
    return this.value;
  }

  isFilled() {
    return this.value !== undefined;
  }
}
