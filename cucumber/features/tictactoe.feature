Feature: Winning at Tic Tac Toe

Scenario: Player X wins with a horizontal victory in the middle
	Given two players play a game of tic tac toe
    And player X places an X at (1,1)
    And player O places an O at (0,0)
    And player X places an O at (1,0)
    And player O places an O at (0,1)
	When player X places an O at (1,2)
    Then player X wins the game