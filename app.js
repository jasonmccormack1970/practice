const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const userScoreDisplay = document.getElementById('user-score');
const computerScoreDisplay = document.getElementById('computer-score');

let userChoice;
let computerChoice;
let userScore = 0;
let computerScore = 0;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = generateCumpterChoices();
    resultDisplay.innerHTML = getResult();
  })
);

function generateCumpterChoices() {
  const randomNumber = Math.floor(Math.random() * 3 + 1); // or use can use possibleChoices.length;
  switch (randomNumber) {
    case 1:
      computerChoice = 'rock';
      return computerChoice;
      break;
    case 2:
      computerChoice = 'paper';
      return computerChoice;
      break;
    case 3:
      computerChoice = 'scissors';
      return computerChoice;
      break;
  }
  c;
}

function getResult() {
  let result;
  if (computerChoice === userChoice) {
    return 'it is a draw';
  }

  if (computerChoice === 'rock') {
    if (userChoice === 'paper') {
      userScoreDisplay.innerHTML = userScore++;
      return 'You win';
    } else {
      computerScoreDisplay.innerHTML = computerScore++;
      return 'You lose';
    }
  }
  if (computerChoice === 'paper') {
    if (userChoice === 'scissors') {
      userScoreDisplay.innerHTML = userScore++;
      return 'You win';
    } else {
      computerScore.innerHTML = computerScore++;
      return 'You lose';
    }
  }
  if (computerChoice === 'scissors') {
    if (userChoice === 'rock') {
      userScoreDisplay.innerHTML = userScore++;
      return 'You win';
    } else {
      computerScoreDisplay.innerHTML = computerScore++;
      return 'You lose';
    }
  }
}
