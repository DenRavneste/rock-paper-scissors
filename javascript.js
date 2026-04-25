// return one of three variables from function to serve as computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let index =  Math.floor(Math.random() * 3);
  return choices[index];
}

// prompt player for their input
function getHumanChoice() {
  let input = prompt("Rock, paper or scissors?");
  return input.toLowerCase();
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
      humanScore++;
      return `You win! ${getHumanChoice} beats ${getComputerChoice}!`;
    } else {
      computerScore++;
      return `You lose! ${getComputerChoice} beats ${getHumanChoice}!`;
    }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
     console.log(`Round ${i}:`);
     let human = getHumanChoice();
     let computer = getComputerChoice();
     let resultMessage = playRound(human, computer);
     
     console.log(`You chose: ${human}`);
     console.log(`Computer chose: ${computer}`);
     console.log(resultMessage);
  }
  
  console.log("Game over");
  console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);
  
  if (humanScore > computerScore) {
    console.log("You won!");
  } else {
    console.log("You lost!");
  }
  
}
