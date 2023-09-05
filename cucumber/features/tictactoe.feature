Feature: Winning at Tic Tac Toe

Scenario: Player X wins with a horizontal victory in the middle
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,0)
    And player X places an X at (1,0)
    And player O places an O at (0,1)
	When player X places an X at (1,2)
    Then player X wins the game

Scenario: Player O wins with a vertical victory on the right
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,2)
    And player X places an X at (1,0)
    And player O places an O at (2,2)
	And player X places an X at (2,1)
	When player O places an O at (1,2)
    Then player O wins the game

Scenario: Player X wins with a diagonal victory top left to bottom right
	Given two players play a game of tic tac toe
    And player X places an X at (0,0)
    And player O places an O at (0,2)
    And player X places an X at (1,1)
    And player O places an O at (1,2)
	When player X places an X at (2,2)
    Then player X wins the game

Scenario: The game ends in a draw
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,1)
    And player X places an X at (0,0)
    And player O places an O at (2,2)
	And player X places an X at (0,2)
	And player O places an X at (2,0)
	And player X places an X at (1,0)
	And player O places an X at (1,2)
	When player X places an X at (2,1)
    Then the game ends in a draw