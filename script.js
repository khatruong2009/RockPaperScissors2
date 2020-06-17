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
})

//functions to start the game when the user clicks an image
rock.addEventListener("click", () => {
 rps("r");
});

paper.addEventListener("click", () => {
 rps("p");
});

scissors.addEventListener("click", () => {
 rps("s");
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
 cChoice.textContent = ("The computer chose " + computerSelection + ".");
 if (computerSelection == "rock" && playerSelection == "r") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  img.src = "rock.png";
  result.textContent = "It's a tie, try again.";
 } else if (computerSelection == "rock" && playerSelection == "p") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  myScore += 1;
  img.src = "rock.png";
  result.textContent = "You win! Paper beats Rock.";
 } else if (computerSelection == "rock" && playerSelection == "s") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  compScore += 1;
  img.src = "rock.png";
  result.textContent = "You lose. Rock beats Scissors.";
 } else if (computerSelection == "scissors" && playerSelection == "r") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  img.src = "scissors.png";
  myScore += 1;
  result.textContent = "You win! Rock beats Scissors.";
 } else if (computerSelection == "scissors" && playerSelection == "s") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  img.src = "scissors.png";
  result.textContent = "It's a tie, try again.";
 } else if (computerSelection == "scissors"  && playerSelection == "p") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  compScore += 1;
  img.src = "scissors.png";
  result.textContent = "You lose. Scissors beats Paper.";
 } else if (computerSelection == "paper" && playerSelection == "r") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  compScore += 1;
  img.src = "paper.png";
  result.textContent = "You lose. Paper beats Rock.";
 } else if (computerSelection == "paper" && playerSelection == "s") {
  message.classList.add("message");
  compImage.classList.add("compImage");
  myScore += 1;
  img.src = "paper.png";
  result.textContent = "You win! Scissors beats Paper.";
 } else {
  message.classList.add("message");
  compImage.classList.add("compImage");
  img.src = "paper.png";
  result.textContent = "It's a tie, try again.";
}

//function to display the score
 pScore.textContent = ("Your Score: " + myScore);
 cScore.textContent = ("Computer Score: " + compScore);

//testing whether or not the game is over
 if (myScore > 2) {
  message.textContent = "You Win!"
 } else if (compScore > 2) {
  message.textContent = "You Lose."
 }
}


