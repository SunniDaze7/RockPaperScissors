

const selections = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const rock  = document.querySelector(".rock-button")
const paper  = document.querySelector(".paper-button")
const scissors  = document.querySelector(".scissors-button")

rock.addEventListener("click", playRound)
paper.addEventListener("click", playRound)
scissors.addEventListener("click", playRound)


function computerPlay() {
    let randomSelection = selections[Math.floor(Math.random()*selections.length)];
   return randomSelection;
}

function playRound(playerSelection, computerSelection){
   if (computerSelection == "rock" && playerSelection == paper) {
      console.log("You win! Paper beats Rock.");
      playerScore++;
   } else if (computerSelection == "paper" && playerSelection == rock) {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
   } else if (computerSelection == "rock" && playerSelection == scissors) {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
   } else if (computerSelection == "scissors" && playerSelection == rock) {
      console.log("You Win! Rock beats Scissors.");
      playerScore++;
   } else if (computerSelection == "scissors" && playerSelection == paper) {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
   } else if (computerSelection == "paper" && playerSelection == scissors) {
      console.log("You Win! Scissors beats Paper.");
      playerScore++;
   } else if (computerSelection == playerSelection) {
      console.log("It's a Draw!");
   }
};


/* function game(){
   while(roundNumber < 5) {
      playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay());
   }
   console.log("Your Score: " + playerScore);
   console.log("Computer's Score: " + computerScore);
   if(playerScore < computerScore) {
      console.log("You lose! :(")
   } else if(playerScore > computerScore) {
      console.log("You are the Champion!")
   } else if(playerScore == computerScore){
      console.log("It's a Tie!");
   };
}; */ 

//playRound(computerPlay());