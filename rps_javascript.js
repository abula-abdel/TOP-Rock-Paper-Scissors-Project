// Global variables to keep track of score
let humanScore = 0;
let computerScore = 0;

const r_button = document.getElementById("rock");
const p_button = document.getElementById("paper");
const s_button = document.getElementById("scissors");

const p_score = document.getElementById("p_score");
const c_score = document.getElementById("c_score");

const winner = document.getElementById("winner");
const results = document.getElementById("results");

// Function to get computer choice of rock, paper or scissors
function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * rps.length);
    return rps[rand];
    }


function playRound(event){

    let a = event.target.id;
    let b = getComputerChoice();

    hAns = a.toLowerCase();
    bAns = b.toLowerCase();

    upA = a.charAt(0).toUpperCase() + a.substring(1, a.length);
    upB = b.charAt(0).toUpperCase() + b.substring(1, b.length);



    if ((hAns === "rock" &&  bAns === "scissors") || (hAns === "scissors" && bAns === "paper") || (hAns === "paper" && bAns === "rock")){
        
        humanScore++;
        p_score.textContent = "Player Score: " + humanScore;
        results.textContent = "You Won! " + upA + " beats " + upB + "!";
        

    }else if(hAns === bAns){
        
        results.textContent = "Tie! " + upA + " ties " + upB + "!";

    }else{

        computerScore++;
        c_score.textContent = "Computer Score: " + computerScore;
        results.textContent = "You Lost! "  + upB + " beats " + upA + "!";
    }


    if(humanScore == 5){

        winner.textContent = "The Player reached five points first! The Player Wins the Game!!";
        p_score.textContent = "Player Score: " + humanScore;
        c_score.textContent = "Computer Score: " + computerScore;

        r_button.removeEventListener("click", playRound);
        p_button.removeEventListener("click", playRound);
        s_button.removeEventListener("click", playRound);
        
    }

    else if(computerScore == 5){

        winner.textContent = "The Computer reached 5 points first! The Computer wins the Game!!";
        p_score.textContent = "Player Score: " + humanScore;;
        c_score.textContent = "Computer Score: " + computerScore;

        r_button.removeEventListener("click", playRound);
        p_button.removeEventListener("click", playRound);
        s_button.removeEventListener("click", playRound);
    }

}

r_button.addEventListener("click", playRound);
p_button.addEventListener("click", playRound);
s_button.addEventListener("click", playRound);