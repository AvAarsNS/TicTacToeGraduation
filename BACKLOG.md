# Make a working tic tac toe game

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
Create an empty game board when a new game is created

### Step 2-6: place a mark at a given position

## Simulate a game with a vertival victory

## Simulate a game with a diagonal victory

## Simulate a game with a draw

# Create an automatic bot-run game

# Create an api to run the game