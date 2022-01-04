

//QUERY SELECTORS
const rock  = document.querySelector(".rock-button")
const paper  = document.querySelector(".paper-button")
const scissors  = document.querySelector(".scissors-button")
const playerCounter = document.querySelector(".player-results")
const computerCounter = document.querySelector(".computer-results")
const roundResult = document.querySelector(".round-results")

//GLOBAL VARIABLES
const computerSelections = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;


//Computer selection function
function computerPlay() {
    let randomSelection = computerSelections[Math.floor(Math.random()*computerSelections.length)];
   return randomSelection;
}


function playRound(playerSelection, computerSelection){
   if(playerScore < 5  && computerScore < 5){
   if (computerSelection == "rock" && playerSelection == "paper") {
      roundResult.innerHTML = "You win! Paper beats Rock.";
      playerScore++;
      playerCounter.innerHTML = "Player Score: " + playerScore;
   } else if (computerSelection == "paper" && playerSelection == "rock") {
      roundResult.innerHTML = "You lose! Paper beats Rock.";
      computerScore++;
      computerCounter.innerHTML = "Computer Score: " + computerScore;
   } else if (computerSelection == "rock" && playerSelection == "scissors") {
      roundResult.innerHTML = "You lose! Rock beats Scissors.";
      computerScore++;
      computerCounter.innerHTML = "Computer Score: " + computerScore;
   } else if (computerSelection == "scissors" && playerSelection == "rock") {
      roundResult.innerHTML = "You Win! Rock beats Scissors.";
      playerScore++;
      playerCounter.innerHTML = "Player Score: " + playerScore;
   } else if (computerSelection == "scissors" && playerSelection == "paper") {
      roundResult.innerHTML = "You lose! Scissors beats Paper.";
      computerScore++;
      computerCounter.innerHTML = "Computer Score: " + computerScore;
   } else if (computerSelection == "paper" && playerSelection == "scissors") {
      roundResult.innerHTML = "You Win! Scissors beats Paper.";
      playerScore++;
      playerCounter.innerHTML = "Player Score: " + playerScore;
   } else{
      roundResult.innerHTML = "It's a Draw!";
   }}
   else if (playerScore > computerScore){ 
      roundResult.innerHTML = "You are the Champion!";
      console.log("Your Score: " + playerScore);
      console.log("Computer's Score: " + computerScore);
   }else if(playerScore < computerScore){
      roundResult.innerHTML = "You Lost! The computer wins.";
      console.log("Your Score: " + playerScore);
      console.log("Computer's Score: " + computerScore);
   }}
      


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


//player Selection functions
rock.addEventListener("click", function(){
   playRound("rock", computerPlay())
})

paper.addEventListener("click", function(){
   playRound("paper", computerPlay())
})

scissors.addEventListener("click", function(){
   playRound("scissors", computerPlay())
})