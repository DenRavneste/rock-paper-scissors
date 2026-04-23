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

function getHumanChoice() {
  return prompt("Rock, paper or scissors?");
}
