//create randomize function called computerPlay() "Rock, paper or Scissors"

//write function called playRound() to play one round
//takes 2 parameters playerSelection and computerSelection(case-insensitive)
//returns string such as "You Lose! Paper Beats Rock"

//write function called game() to play five rounds by
//looping in function playRound() and keep score as well as
//report winner or loser

//use prompt to get user input
//dont consoloe.log in any function except displaying results in game()

const selections = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    let randomSelection = selections[Math.floor(Math.random()*selections.length)];
    return randomSelection;
}

function playRound(playerSelection, computerSelection){
let playerSelection = prompt("Make your Selction:", "Rock, Paper, Or Scissors");
let computerSelection = computerPlay();
if (computerSelection == "Rock" || playerSelection == "Paper") {
    return "You win! Paper beats Rock.";
} else if (computerSelection == "Paper" || playerSelection == "Rock") {
    return "You lose! Paper beats Rock.";
} else if (computerSelection == "Rock" || playerSelection == "Scissors") {
    return "You lose! Rock beats Scissors.";
} else if (computerSelection == "Scissors" || playerSelection == "Rock") {
    return "You Win! Rock beats Scissors.";
} else if (computerSelection == "Scissors" || playerSelection == "Paper") {
    return "You lose! Scissors beats Paper."
} else if (computerSelection == "Paper" || playerSelection == "Scissors") {
    return "You Win! Scissors beats Paper."
} else if (computerSelection == playerSelection) {
    return "It's a Draw!";
}
}

//work on case insensitive