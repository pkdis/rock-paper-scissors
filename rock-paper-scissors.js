// Get name from user
let humanScore = 0;
let computerScore = 0;
// Get selection from user
function getHumanChoice() {
  choise = prompt(
    "Make your selection: R for Rock or P for Paper or S for Scissors!"
  );
  if (choise == "r" || choise == "R" || choise.toLowerCase() == "rock") {
    choise = "Rock";
  } else if (
    choise == "p" ||
    choise == "P" ||
    choise.toLowerCase() == "paper"
  ) {
    choise = "Paper";
  } else if (
    choise == "s" ||
    choise == "S" ||
    choise.toLowerCase() == "scissors"
  ) {
    choise = "Scissors";
  }
  return choise;
}
// Create random choice for computer
//Create function that randomly returns “rock”, “paper” or “scissors”

function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      choise = "Rock";
      break;
    case 2:
      choise = "Paper";
      break;
    case 3:
      choise = "Scissors";
      break;
  }
  return choise;
}
humanChoice = getHumanChoice();
computerChoice = getComputerChoice();
const styleComputer =
  "background-color: red; color: white; font-style: italic; border: 5px solid white; font-size: 2em;";
const stylePlayer =
  "background-color: blue; color: white; font-style: italic; border: 5px solid white; font-size: 2em;";

console.log(`You chose %c${humanChoice}`, stylePlayer);
console.log(`Computer chose %c${computerChoice}`, styleComputer);

// Compare user choice VS computer choice
// Declare winner
