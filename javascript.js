// return one of three variables from function
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
  let humanChoice = getHumanChoice().toLowerCase();
  let computerChoice = getComputerChoice()
  if (humanChoice == "rock" && computerChoice == "rock") {
  } else if (humanChoice == "rock" && computerChoice == "paper") {
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
  } else if (humanChoice == "paper" && computerChoice == "rock") {
  } else if (humanChoice == "paper" && computerChoice == "paper") {
  } else if (humanChocie == "paper" && computerChoice == "scissors") {
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
  } else {
  }
}
