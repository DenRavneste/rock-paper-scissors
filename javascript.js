// return one of three variables from function to serve as computer choice
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * (5 - 1 + 1) + 1);
  if (randomNumber == 1) {
    return "rock";
  } else if (randomNumber == 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

// prompt player for their input
function getHumanChoice() {
  return prompt("Rock, paper or scissors?");
}

// set starting values for human and computer score
let humanScore = 0;
let computerScore = 0;

// initiate a round of play
function playRound(humanChoice, computerChoice) {
  let getHumanChoice = humanChoice.toLowerCase();
  let getComputerChoice = computerChoice;

  if (getHumanChoice === getComputerChoice) {
    return "It's a tie!";
  } else if (
    (getHumanChoice === "rock" && getComputerChoice === "scissors") ||
    (getHumanChoice === "paper" && getComputerChoice === "rock") ||
    (getHumanChoice === "scissors" && getComputerChoice === "paper")
  ) {
      ++humanScore;
      return `You win! ${getHumanChoice} beats ${getComputerChoice}!`;
    } else {
      ++computerScore;
      return `You lose! ${getComputerChoice} beats ${getHumanChoice}!`;
    }
}
