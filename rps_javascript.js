let humanScore = 0;
let comptuerScore = 0;

function getComptuerChoice(){
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
        comptuerScore = comptuerScore + 1;
        return "You Lost! "  + upB + " beats " + upA + "!";
    }

}

    const playChoice = getHumanChoice();
    const compChoice = getComptuerChoice();

    console.log(compChoice);
    console.log(playRound(playChoice, compChoice));