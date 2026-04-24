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

// play five rounds of rock paper scissors
function playGame() {
// set starting values for human and computer score
let humanScore = 0;
let computerScore = 0;

// initiate a round of play
function playRound(humanChoice, computerChoice) {
  let getHumanChoice = humanChoice.toLowerCase();
  let getComputerChoice = computerChoice;
  if (humanChoice == "rock" && computerChoice == "rock") {
    console.log("Rock vs rock! It's a tie, go again!");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    console.log("Paper beats rock! You lose this round!");
    computerScore = ++computerScore;
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    console.log("Rock beats scissors! You win this round!");
    humanScore = ++humanScore;
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    console.log("Paper beats rock! You win this round");
    humanScore = ++humanScore;
  } else if (humanChoice == "paper" && computerChoice == "paper") {
    console.log("Paper vs paper! It's a tie, go again!");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    console.log("Scissors beat paper! You lose this round!");
    computerScore = ++ComputerScore;
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    console.log("Rock beats scissors! You lose this round!");
    computerScore = ++computerScore;
  } else if (humanChoice == "scissors" && computerChoice == "paper") {
    console.log("Scissors beat paper! You win this round!");
    humanScore = ++humanScore;
  } else {
    console.log("Scissors vs scissors! It's a tie, go again!");
  }
}
}
