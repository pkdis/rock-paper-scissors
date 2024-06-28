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

function checkResult(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return (result = "Tie");
  } else if (
    (humanChoice === "Rock" && computerChoice === "Scissors") ||
    (humanChoice === "Scisors" && computerChoice === "Paper") ||
    (humanChoice === "Paper" && computerChoice === "Rock")
  ) {
    return (result = "Win");
  } else return (result = "Lose");
}
playGame();

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    function playRound(humanChoice, computerChoice) {
      console.log(`You chose %c${humanChoice}`, stylePlayer);
      console.log(`Computer chose %c${computerChoice}`, styleComputer);
      result = checkResult(humanChoice, computerChoice);
      console.log(result);
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
    playRound(humanSelection, computerSelection);
  }
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
// function checkResult() {
//   if (choiceUser === choiceComputer) {
//     return (result = "Tie");
//   } else if (choiceUser === "Rock") {
//     if (choiceComputer === "Paper") {
//       return (result = "Lose");
//     } else return (result = "Win");
//   } else if (choiceUser === "Paper") {
//     if (choiceComputer === "Scissors") {
//       return (result = "Lose");
//     } else return (result = "Win");
//   } else if (choiceUser === "Scissors") {
//     if (choiceComputer === "Rock") {
//       return (result = "Lose");
//     } else return (result = "Win");
//   }
// }
