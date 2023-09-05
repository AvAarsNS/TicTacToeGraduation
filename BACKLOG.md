# Make a working tic tac toe game

🍅
## Simulate a game with a horizontal victory

Scenario: Player X wins with a horizontal victory in the middle
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,0)
    And player X places an O at (1,0)
    And player O places an O at (0,1)
	When player X places an O at (1,2)
    Then player X wins the game

The architecture consists of the following components:
Cell -> Responsible for checking if a cell is already filled
Board -> Responsible for the cells, and retrieving rows/columns/diagonals
Game/TicTacToe -> Main class, responsible for user interaction and to determine the state/winner

### Step 1: given
Create an empty game board when a new game is created ✅

🍅🍅
### Step 2-6: place a mark at a given position
Place a mark with the game class ✅ -> TODO: Throw error if the same player plays 2 times in a row
Place a mark with the board class ✅ -> TODO: Throw error when row/column is out of bounds!
Place a mark in a cell ✅ -> TODO: Throw error when a mark is already there!

Placing a mark in a game should result in output: "Placed X/O at (row, column)" ✅

🍅🍅🍅
### Step 7: determine horizontal victory and process to readable output
The game should determine a horizontal victory, by examining the row played ✅
The board should be able to give that row ✅

🍅🍅🍅🍅
The game should be able to detect if the returned row is filled with the mark played ✅
The game should give readable output ✅

🍅🍅🍅🍅🍅
## Simulate a game with a vertival victory
The game should be able to examine the column played ✅
The board should be able to give that column ✅

🍅🍅🍅🍅🍅🍅
## Simulate a game with a diagonal victory
Check on which diagonal the cell is at ✅
Retrieve diagonal from board ✅
Check cells ✅

🍅🍅🍅🍅🍅🍅🍅
Refactoring tests, removing difficult to understand mocking ✅

🍅🍅🍅🍅🍅🍅🍅🍅
## Simulate a game with a draw
The game should be able to end in a draw ✅
The board should be able to determine whether it is filled up ✅
The cell should be able to determine whether it is filled up ✅

🍅🍅🍅🍅🍅🍅🍅🍅🍅
# Create an automatic bot-run game
Address todo: cell should error when a mark is already there ✅

🍅🍅🍅🍅🍅🍅🍅🍅🍅🍅
Create a bot game (this can end either way) ✅

# Create an api to run the game
Create an API which calls the bot game and outputs the result ✅