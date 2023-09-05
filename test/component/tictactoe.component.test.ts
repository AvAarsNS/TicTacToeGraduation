/* eslint-disable @typescript-eslint/dot-notation */
import { TicTacToe } from "../../src/tictactoe";
import { Board } from "../../src/board";
import { Mark } from "../../src/cell";
import { allCellsO, allCellsX, mixedCells } from "../doubles/cells.double";

jest.mock("../../src/board");

let game = new TicTacToe();
let mockedBoard = game["board"] as jest.Mocked<Board>;

beforeEach(() => {
  jest.resetAllMocks();
  game = new TicTacToe();

  mockedBoard = game["board"] as jest.Mocked<Board>;
  mockedBoard.getRow.mockImplementation(mixedCells);
  mockedBoard.getColumn.mockImplementation(mixedCells);
  mockedBoard.getDiagonal.mockImplementation(mixedCells);
  mockedBoard.isFull.mockReturnValue(false);
});

describe("This is a test suite for components of the TicTacToe game", () => {
  it("A new game should create a new board, of 3x3 squares", () => {
    expect(Board).toBeCalledWith(3, 3);
    expect(game["board"]).not.toBeUndefined();
  });

  describe("A player should be able to place its mark at a given position", () => {
    it("Putting a mark somewhere should only place a mark once", () => {
      game.place("X", 0, 0);
      expect(game["board"].place).toBeCalledTimes(1);
    });

    describe("A player should be able to place a mark, resulting in readable output when", () => {
      test.each([
        ["X", 0, 0],
        ["O", 1, 0],
        ["X", 2, 2],
      ] as [Mark, number, number][])(
        "placing an %s at (%i, %i)",
        (mark, row, column) => {
          const result = game.place(mark, row, column);

          expect(game["board"].place).toBeCalledWith(mark, row, column);
          expect(result).toEqual(`Placed ${mark} at (${row}, ${column})`);
        }
      );
    });
  });

  describe("When a player places a mark, the game", () => {
    let spiedWinMethod: jest.SpyInstance;
    afterAll(() => {
      spiedWinMethod.mockRestore();
    });

    beforeEach(() => {
      spiedWinMethod = jest.spyOn(game, "hasWinAt");
    });

    describe("should check for a victory", () => {
      it("by checking it with the right mark and coordinate", () => {
        game.place("X", 1, 1);
        expect(spiedWinMethod).toHaveBeenCalledWith("X", 1, 1);
      });

      it("and return that that player wins if that results in a victory", () => {
        spiedWinMethod.mockReturnValueOnce(true);
        const result = game.place("X", 1, 1);
        expect(result).toEqual("Player X wins by placing (1, 1)");
      });

      it("and set the game to finished", () => {
        spiedWinMethod.mockReturnValueOnce(true);
        game.place("X", 1, 1);
        expect(game.finished()).toBeTruthy();
      });
    });
    describe("should check for a draw", () => {
      it("by checking if the board is completely full", () => {
        game.place("X", 1, 1);
        expect(mockedBoard.isFull).toHaveBeenCalled();
      });

      it("and return that the game ends in a draw if that is the case", () => {
        mockedBoard.isFull.mockReturnValueOnce(true);
        const result = game.place("X", 1, 1);
        expect(result).toEqual("Draw");
      });

      it("and set the game to finished", () => {
        mockedBoard.isFull.mockReturnValueOnce(true);
        game.place("X", 1, 1);
        expect(game.finished()).toBeTruthy();
      });
    });
  });

  describe("When checking for a win,", () => {
    describe("the player wins if he", () => {
      it("played an X on (0,1) and the row is completely filled with X", () => {
        mockedBoard.getRow.mockImplementationOnce(allCellsX);

        const result = game["hasWinAt"]("X", 0, 1);

        expect(mockedBoard.getRow).toBeCalledWith(0);
        expect(mockedBoard.getColumn).toBeCalledWith(1);
        expect(mockedBoard.getDiagonal).not.toBeCalledWith("\\");
        expect(mockedBoard.getDiagonal).not.toBeCalledWith("/");

        expect(result).toBeTruthy();
      });

      it("played an O on (0,2) and the column is completely filled with O", () => {
        mockedBoard.getRow.mockImplementationOnce(allCellsO);

        const result = game["hasWinAt"]("O", 0, 2);

        expect(mockedBoard.getRow).toBeCalledWith(0);
        expect(mockedBoard.getColumn).toBeCalledWith(2);
        expect(mockedBoard.getDiagonal).not.toBeCalledWith("\\");
        expect(mockedBoard.getDiagonal).toBeCalledWith("/");

        expect(result).toBeTruthy();
      });

      it("played an X on (2,2) and the \\ diagonal is completely filled with X", () => {
        mockedBoard.getDiagonal.mockImplementation((direction) =>
          direction === "\\" ? allCellsX() : mixedCells()
        );

        const result = game["hasWinAt"]("X", 2, 2);

        expect(mockedBoard.getRow).toBeCalledWith(2);
        expect(mockedBoard.getColumn).toBeCalledWith(2);
        expect(mockedBoard.getDiagonal).toBeCalledWith("\\");
        expect(mockedBoard.getDiagonal).not.toBeCalledWith("/");

        expect(result).toBeTruthy();
      });

      it("played an O on (1,1) and the / diagonal is completely filled with O", () => {
        mockedBoard.getDiagonal.mockImplementation((direction) =>
          direction === "/" ? allCellsO() : mixedCells()
        );

        const result = game["hasWinAt"]("O", 1, 1);

        expect(mockedBoard.getRow).toBeCalledWith(1);
        expect(mockedBoard.getColumn).toBeCalledWith(1);
        expect(mockedBoard.getDiagonal).toBeCalledWith("\\");
        expect(mockedBoard.getDiagonal).toBeCalledWith("/");

        expect(result).toBeTruthy();
      });
    });
    describe("the player does not win if he", () => {
      it("played an X on (1,1) and neither row, column or diagonal is filled with X", () => {
        const result = game["hasWinAt"]("X", 1, 1);

        expect(mockedBoard.getRow).toBeCalledWith(1);
        expect(mockedBoard.getColumn).toBeCalledWith(1);
        expect(mockedBoard.getDiagonal).toBeCalledWith("\\");
        expect(mockedBoard.getDiagonal).toBeCalledWith("/");

        expect(result).toBeFalsy();
      });
    });
  });
});
