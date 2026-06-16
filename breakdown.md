# UNDERSTANDING THE PROBLEM
Write a program that lets the user pick a move between rock, paper, and scissors, compares that with the computer's move and shows the result.

# PLANNING
Does your program have an interface? What will it look like?
The game will be a browser console program, so no interface is needed. The only interaction will be the user select a move.

What inputs will your program have? Will the user enter data or will you get input from somewhere else?
The user will pick a move from 3 options between rock, paper, and scissors.

What’s the desired output?
The desired output is a result between tie, you win, or you lose after each play.

# THE ALGORITHM
1. Let the user pick a move between rock, paper, and scissors.
2. Let the computer generate a random move between rock, paper, and scissors.
3. If both moves are the same, print 'It's a tie.'
4. Otherwise if the user has a winning move, print 'You win!'
5. Otherwise print 'You lose.'
6. Ask the user if they want to play again
7. If the user wants to play again, restart the game
8. Otherwise, say goodbye and end the game

# PSUEDOCODE
CREATE a function called GetPlayerMove
    CREATE a playerMove variable and INIT to a PROMPT for the user's choice

    RETURN playerMove
END

CREATE a function called GetComputerMove
    CREATE a computerMove variable
    CREATE a randomNumber variable and INIT to a randomly generated number between 0 and 1

    IF randomNumber is greater than or equal to 0 and less than or equal to 1/3, SET computerMove to 'Rock'.
    ELSE IF randomNumber is greater than 1/3 and less than or equal to 2/3, SET computerMove to 'Paper'.
    ELSE SET computerMove to 'Scissors'.

    RETURN computerMove
END

CREATE a function called GamePlay
    CREATE a winMessage variable and SET to 'You win!'
    CREATE a loseMessage variable and SET to 'You lose.'
    CREATE a tieMessage variable and SET to 'It's a tie.'

    CREATE a playerMove variable and INIT it with the return value from GetPlayerMove
    CREATE a computerMove variable and INIT it with the return value from GetComputerMove

    IF playerMove equals computerMove
        DISPLAY tieMessage
    
    ELSE IF playerMove equals Rock and computerMove equals Paper
        DISPLAY loseMessage
    ELSE IF playerMove equals Rock and computerMove equals Scissors
        DISPLAY winMessage

    ELSE IF playerMove equals Paper and computerMove equals Rock
        DISPLAY winMessage
    ELSE IF playerMove equals Paper and computerMove equals Scissors
        DISPLAY loseMessage

    ELSE IF playerMove equals Scissors and computerMove equals Rock
        DISPLAY loseMessage
    ELSE
        /* playerMove equals Scissors and computerMove equals Paper */
        DISPLAY winMessage

    CALL GameReplay
END

CREATE a function called GameReplay
    CREATE a variable called replayChoice and INIT to a confirmation prompt for a replay

    IF replayChoice is true
        CALL GamePlay
    ELSE
        DISPLAY a goodbye message 
END

CALL GamePlay