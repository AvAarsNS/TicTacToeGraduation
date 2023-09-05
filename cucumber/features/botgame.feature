Feature: Bots playing a game of tic tac toe

Scenario: User requests a bot game
	Given a user requests a game of Tic Tac Toe
    And this game is played by bots
    When the game is played
    Then the course of the game contains at least 3 steps
    And the result is a win or draw
