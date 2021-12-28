//create randomize function called computerPlay() "Rock, paper or Scissors"

//write function called playRound() to play one round
//takes 2 parameters playerSelection and computerSelection(case-insensitive)
//console.log(s string such as "You Lose! Paper Beats Rock"

//write function called game() to play five rounds by
//looping in function playRound() and keep score as well as
//report winner or loser

//use prompt to get user input
//dont console.log in any function except displaying results in game()

const selections = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function computerPlay() {
    let randomSelection = selections[Math.floor(Math.random()*selections.length)];
   return randomSelection;
}

function playRound(playerSelection, computerSelection){
   if (computerSelection == "rock" && playerSelection == "paper") {
      console.log("You win! Paper beats Rock.");
      playerScore++;
   } else if (computerSelection == "paper" && playerSelection == "rock") {
      console.log("You lose! Paper beats Rock.");
      computerScore++;
   } else if (computerSelection == "rock" && playerSelection == "scissors") {
      console.log("You lose! Rock beats Scissors.");
      computerScore++;
   } else if (computerSelection == "scissors" && playerSelection == "rock") {
      console.log("You Win! Rock beats Scissors.");
      playerScore++;
   } else if (computerSelection == "scissors" && playerSelection == "paper") {
      console.log("You lose! Scissors beats Paper.");
      computerScore++;
   } else if (computerSelection == "paper" && playerSelection == "scissors") {
      console.log("You Win! Scissors beats Paper.");
      playerScore++;
   } else if (computerSelection == playerSelection) {
      console.log("It's a Draw!");
   }
   roundNumber++;
};


//wrap this console log in a function called game(), and repeat 5 function calls


//add outcome for equal score
//playRound 5 times
function game(){
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
};

game();