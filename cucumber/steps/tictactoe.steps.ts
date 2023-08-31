/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature, DefineStepFunction } from "jest-cucumber";
import { TicTacToe } from "../../src/tictactoe";

const feature = loadFeature("./cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  test("Player X wins with a horizontal victory in the middle", ({
    given,
    and,
    when,
    then,
  }) => {
    let game = new TicTacToe();
    let result: string;

    const placeStep = (step: DefineStepFunction) =>
      step(
        /^player [XO] places an ([XO]) at \((\d+),(\d+)\)$/,
        (mark: "X" | "O", row: number, column: number) => {
          result = game.place(mark, row, column);
        }
      );

    given("two players play a game of tic tac toe", () => {
      game = new TicTacToe();
    });

    placeStep(and);

    placeStep(and);

    placeStep(and);

    placeStep(and);

    placeStep(when);

    then("player X wins the game", () => {
      expect(result).toEqual("Player X wins");
    });
  });
});
