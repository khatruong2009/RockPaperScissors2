// delcaring variables and DOM manipulations
let ran;
let computerSelection = computerPlay();
let playerSelection; 
let myScore = 0;
let compScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let pScore = document.querySelector("#pScore");
let cScore = document.querySelector("#cScore");
let cChoice = document.querySelector("#cChoice");
let pChoice = document.querySelector("#pChoice");
let pImage = document.querySelector("#pImage");
let cImage = document.querySelector("#cImage");
let message = document.querySelector("#message");
let img = document.querySelector("#img");
let compImage = document.querySelector("#compImage");
let reset = document.querySelector("#reset");


//function to reset the game
reset.addEventListener("click", () => {
 myScore = 0;
 compScore = 0;
 pScore.textContent = ("Your Score: " + myScore);
 cScore.textContent = ("Computer Score: " + compScore);
 message.textContent = "";
 message.classList.remove("green");
 message.classList.add("red");
 result.textContent = "";
 result.classList.remove("result-border");
 pImage.src = "";
 cImage.src = "";
})

//functions to start the game when the user clicks an image
rock.addEventListener("click", () => {
 rps("rock");
});

paper.addEventListener("click", () => {
 rps("paper");
});

scissors.addEventListener("click", () => {
 rps("scissors");
});

//function to get a random number
function random () {
 ran = Math.floor((Math.random()) * 3 + 1);
 return ran;
}

//function to decide what the computer chooses
function computerPlay() {
 random();
 if (ran == 1) {
  return "rock";
 } else if (ran == 2) {
  return "paper"
 } else return "scissors";
}

//function to play rock paper scissors
function rps(playerSelection) {
 computerSelection = computerPlay();
result.classList.add("result-border");
 if (computerSelection == "rock" && playerSelection == "rock") {
  message.classList.add("message");
  result.textContent = "It's a tie, try again.";
  cImage.src = "images/rock.png";
  pImage.src = "images/rock.png";
 } else if (computerSelection == "rock" && playerSelection == "paper") {
  message.classList.add("message");
  myScore += 1;
  result.textContent = "You win! Paper beats Rock.";
  cImage.src = "images/rock.png";
  pImage.src = "images/paper.png";
 } else if (computerSelection == "rock" && playerSelection == "scissors") {
  message.classList.add("message");
  compScore += 1;
  result.textContent = "You lose. Rock beats Scissors.";
  cImage.src = "images/rock.png";
  pImage.src = "images/scissors.png";
 } else if (computerSelection == "scissors" && playerSelection == "rock") {
  message.classList.add("message");
  myScore += 1;
  result.textContent = "You win! Rock beats Scissors.";
  cImage.src = "images/scissors.png";
  pImage.src = "images/rock.png";
 } else if (computerSelection == "scissors" && playerSelection == "scissors") {
  message.classList.add("message");
  result.textContent = "It's a tie, try again.";
  cImage.src = "images/scissors.png";
  pImage.src = "images/scissors.png";
 } else if (computerSelection == "scissors"  && playerSelection == "paper") {
  message.classList.add("message");
  compScore += 1;
  result.textContent = "You lose. Scissors beats Paper.";
  cImage.src = "images/scissors.png";
  pImage.src = "images/paper.png";
 } else if (computerSelection == "paper" && playerSelection == "rock") {
  message.classList.add("message");
  compScore += 1;
  result.textContent = "You lose. Paper beats Rock.";
  cImage.src = "images/paper.png";
  pImage.src = "images/rock.png";
 } else if (computerSelection == "paper" && playerSelection == "scissors") {
  message.classList.add("message");
  myScore += 1;
  result.textContent = "You win! Scissors beats Paper.";
  cImage.src = "images/paper.png";
  pImage.src = "images/scissors.png";
 } else {
  message.classList.add("message");
  result.textContent = "It's a tie, try again.";
  cImage.src = "images/paper.png";
  pImage.src = "images/paper.png";
}

//function to display the score
 pScore.textContent = ("Your Score: " + myScore);
 cScore.textContent = ("Computer Score: " + compScore);

//testing whether or not the game is over
 if (myScore > 2) {
  message.textContent = "You Win!";
  message.classList.add("green");
 } else if (compScore > 2) {
  message.textContent = "You Lose.";
  message.classList.add("red");
 }
}


