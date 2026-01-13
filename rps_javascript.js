function getComptuerChoice(){
    let rps = ["rock", "paper", "scissors"];
    let rand = Math.floor(Math.random() * rps.length);
    return rps[rand];
    }

function getHumanChoice(){
    let choice = prompt("Please choose rock, paper or scissors");
    return choice;
}





    console.log(getHumanChoice())