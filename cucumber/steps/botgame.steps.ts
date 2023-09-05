/* eslint-disable import/no-extraneous-dependencies */
import { loadFeature, defineFeature } from "jest-cucumber";
import { TicTacToe } from "../../src/tictactoe";
import { BotGame } from "../../src/botgame";

const feature = loadFeature("./cucumber/features/botgame.feature");

defineFeature(feature, (test) => {
  test("User requests a bot game", ({ given, and, when, then }) => {
    let game = new TicTacToe();
    let botGame = new BotGame(game);
    let steps: string[] = [];

    given("a user requests a game of Tic Tac Toe", () => {
      game = new TicTacToe();
      botGame = new BotGame(game);
    });

    and("this game is played by bots", () => {
      botGame = new BotGame(game);
    });

    when("the game is played", () => {
      steps = botGame.play();
    });

    then("the course of the game contains at least 3 steps", () => {
      expect(steps.length).toBeGreaterThanOrEqual(3);
    });

    and("the result is a win or draw", () => {
      const result = steps.pop();
      expect(["Player X wins", "Player O wins", "Draw"]).toContain(result);
    });
  });
});
