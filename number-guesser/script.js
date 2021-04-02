let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate random number

let generateTarget = () => Math.floor(Math.random() * 10);

// This function will be called each round to determine which guess is closest to the target number.

let compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    if (Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess)){
        return true;
    } else if (Math.abs(humanGuess - targetGuess) === Math.abs(computerGuess - targetGuess)){
        return true;
    } else {
        return false;
    };
};

// This function will be used to correctly increase the winner’s score after each round.

let updateScore = winner => {
    if (winner === 'human'){
        humanScore++;
    } else if (winner === 'computer'){
        computerScore++;
    };
};

// This function will be used to update the round number after each round.

let advanceRound = () => currentRoundNumber++;