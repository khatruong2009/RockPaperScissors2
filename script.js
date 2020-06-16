let ran;
let computerSelection = computerPlay();
let playerSelection; 
let myScore = 0;
let compScore = 0;
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
 rps("r");
});

paper.addEventListener("click", () => {
 rps("p");
});

scissors.addEventListener("click", () => {
 rps("s");
});

//combines below functions and loops it while keeping score
function game() {
 while (myScore < 3 && compScore < 3) {
 console.log(rps(playerSelection));
 console.log("Your score is: " + myScore, "The computer's score is: " +  compScore);
 computerSelection = computerPlay();
 }
 if (myScore == 3) {
  return "Game Over. You Win!";
 } else return "Game Over. You Lost.";
}


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
 console.log("The computer chose " + computerSelection);
 if (computerSelection == "rock" && playerSelection == "r") {
  return "It's a tie, try again.";
 } else if (computerSelection == "rock" && playerSelection == "p") {
  myScore += 1;
  return "You win! Paper beats Rock.";
 } else if (computerSelection == "rock" && playerSelection == "s") {
  compScore += 1;
  return "You lose. Rock beats Scissors.";
 } else if (computerSelection == "scissors" && playerSelection == "r") {
  myScore += 1;
  return "You win! Rock beats Scissors.";
 } else if (computerSelection == "scissors" && playerSelection == "s") {
  return "It's a tie, try again.";
 } else if (computerSelection == "scissors"  && playerSelection == "p") {
  compScore += 1;
  return "You lose. Scissors beats Paper.";
 } else if (computerSelection == "paper" && playerSelection == "r") {
  compScore += 1;
  return "You lose. Paper beats Rock";
 } else if (computerSelection == "paper" && playerSelection == "s") {
  myScore += 1;
  return "You win! Scissors beats Paper";
 } else return "It's a tie, try again.";
}



