import express, { Request, Response } from "express";
import { TicTacToe } from "./tictactoe";
import { BotGame } from "./botgame";

// Create a new express application instance
const app: express.Application = express();

app.use(express.json());

type ResponseFormat = {
  steps: string[];
  board: string;
};

// Define the POST endpoint
app.get("/tictactoe", (_req: Request, res: Response) => {
  const game = new TicTacToe();
  const botGame = new BotGame(game);

  const steps = botGame.play();

  const response: ResponseFormat = {
    steps,
    board: game.getFormattedBoard(),
  };

  res.json(response);
});

// The server is listening on port 3000
app.listen(3000, () => {
  console.log("App is listening on port 3000!");
});
