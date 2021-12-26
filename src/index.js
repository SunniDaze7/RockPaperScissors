//create randomize function called computerPlay() "Rock, paper or Scissors"

//write function called playRound() to play one round
//takes 2 parameters playerSelection and computerSelection(case-insensitive)
//console.log(s string such as "You Lose! Paper Beats Rock"

//write function called game() to play five rounds by
//looping in function playRound() and keep score as well as
//report winner or loser

//use prompt to get user input
//dont consoloe.log in any function except displaying results in game()

const selections = ["rock", "paper", "scissors"];

function computerPlay() {
    let randomSelection = selections[Math.floor(Math.random()*selections.length)];
   return randomSelection;
}

function playRound(playerSelection, computerSelection){
    if (computerSelection == "rock" || playerSelection == "paper") {
       return "You win! Paper beats Rock.";
    } else if (computerSelection == "paper" || playerSelection == "rock") {
       return "You lose! Paper beats Rock.";
    } else if (computerSelection == "rock" || playerSelection == "scissors") {
       return "You lose! Rock beats Scissors.";
    } else if (computerSelection == "scissors" || playerSelection == "rock") {
       return "You Win! Rock beats Scissors.";
    } else if (computerSelection == "scissors" || playerSelection == "paper") {
       return "You lose! Scissors beats Paper.";
    } else if (computerSelection == "paper" || playerSelection == "scissors") {
       return "You Win! Scissors beats Paper.";
    } else if (computerSelection == playerSelection) {
       return "It's a Draw!";
    }
    }

    
//wrap this console log in a function called game(), and repeat function calls
console.log(playRound(prompt("Rock, Paper, or Scissors?").toLowerCase(), computerPlay()));
