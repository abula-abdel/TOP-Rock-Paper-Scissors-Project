let humanScore = 0;
let computerScore = 0;

//
function getComputerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * rps.length);
    return rps[rand];
    }

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper or scissors");
    return choice;
}

function playRound(a, b){
    hAns = a.toLowerCase();
    bAns = b.toLowerCase();

    upA = a.charAt(0).toUpperCase() + a.substring(1, a.length);
    upB = b.charAt(0).toUpperCase() + b.substring(1, b.length);

    if ((hAns === "rock" &&  bAns === "scissors") || (hAns === "scissors" && bAns === "paper") || (hAns === "paper" && bAns === "rock")){
        
        humanScore = humanScore + 1;
        return "You Won! " + upA + " beats " + upB + "!";

    } else if(hAns === bAns){
        
        return "Tie! " + upA + " ties " + upB + "!" ;

    }else{
        computerScore = computerScore + 1;
        return "You Lost! "  + upB + " beats " + upA + "!";
    }

}

function playGame(){
    for(let step = 0; step < 5; step++){
        
        let playChoice = getHumanChoice();
        let compChoice = getComputerChoice();
        
        console.log("Computer: " + compChoice)
        console.log("You: " + playChoice)


        let out = playRound(playChoice, compChoice);

        
        console.log(out);
        console.log("Your Score: " + humanScore + " | " + "Computer Score: " + computerScore);
    }

    if (humanScore > computerScore){
        return console.log("You won!")
    }else if (humanScore < computerScore){
        return console.log("You lost!")
    }else{
        return(console.log("It was a tie!"))
    }
}

playGame();