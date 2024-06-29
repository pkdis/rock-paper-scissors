//Styling results
const styleComputer =
  "background-color: red; color: white; font-style: italic; border: 5px solid white; font-size: 1.2em;";
const stylePlayer =
  "background-color: blue; color: white; font-style: italic; border: 5px solid white; font-size: 1.2em;";
const styleResultP =
  "background-color: blue; color: white; font-style: italic; border: 5px solid white; font-size: 1.2em;";
const styleResultC =
  "background-color: red; color: white; font-style: italic; border: 5px solid white; font-size: 1.2em;";
const styleBlack =
  "background-color: black; color: white; font-style: italic; border: 5px solid white; font-size: 1.2em;";

// Get the players choice.
function getHumanChoice() {
  choice = prompt(
    "Make your selection: R for Rock or P for Paper or S for Scissors!"
  );
  if (choice == "r" || choice == "R" || choice.toLowerCase() == "rock") {
    choice = "Rock";
  } else if (
    choice == "p" ||
    choice == "P" ||
    choice.toLowerCase() == "paper"
  ) {
    choice = "Paper";
  } else if (
    choice == "s" ||
    choice == "S" ||
    choice.toLowerCase() == "scissors"
  ) {
    choice = "Scissors";
  }
  return choice;
}

//Get a "random" Computer choice
function getComputerChoice() {
  randomNum = Math.floor(Math.random() * 3) + 1;
  switch (randomNum) {
    case 1:
      choice = "Rock";
      break;
    case 2:
      choice = "Paper";
      break;
    case 3:
      choice = "Scissors";
      break;
  }
  return choice;
}

//Comparing the two choices
function checkResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Tie";
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    return "Win";
  } else return "Lose";
}

//Main function that runs the game for 5 times
function playGame() {
  // Initialize Score values
  let humanScore = 0;
  let computerScore = 0;

  //Loop that runs the game for 5 times
  for (let i = 0; i < 5; i++) {
    //Requesting Player and Computer Choices
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    //Function that is called for every game round
    function playRound(humanChoice, computerChoice) {
      //Output selection to console
      console.log(`You chose %c${humanChoice}`, stylePlayer);
      console.log(`Computer chose %c${computerChoice}`, styleComputer);

      //Assign the result of the comparison of the choices, keep score and output result to console
      result = checkResult(humanChoice, computerChoice);
      if (result == "Win") {
        humanScore += 1;
        console.log(
          `%c You Win!  ${humanChoice} beats ${computerChoice} Score: You:${humanScore} Computer:${computerScore} `,
          styleResultP
        );
      } else if (result == "Lose") {
        computerScore += 1;
        console.log(
          `%c You Lose!  ${humanChoice} loses to ${computerChoice} Score: You:${humanScore} Computer:${computerScore} `,
          styleResultC
        );
      } else {
        console.log(
          `%c It is a Tie! You both selected ${humanChoice} Score: You:${humanScore} Computer:${computerScore} `,
          styleBlack
        );
      }
    }

    //Calling the function that plays a round
    playRound(humanSelection, computerSelection);
  }

  //Comparing scores to determine Winner
  if (humanScore > computerScore) {
    console.log(
      `%c You Won! You:${humanScore} Computer:${computerScore} `,
      styleResultP
    );
  } else if (humanScore < computerScore) {
    console.log(
      `%c You Lost! You:${humanScore} Computer:${computerScore} `,
      styleResultC
    );
  } else
    console.log(
      `%c It is a Tie! You:${humanScore} Computer:${computerScore} `,
      styleBlack
    );
}
//Calling the main Game function
playGame();
