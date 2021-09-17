async function BestOfFiveRPSGame(){
    clearResults();
    let humanRoundWins = 0;
    let computerRoundWins = 0;
    let roundCounter = 1;


    while (humanRoundWins != 3 && computerRoundWins != 3){
        await sleep(100);
        let roundResult;
        roundResult = RoundofRPS(roundCounter);
        if (roundResult==0){
        } else if (roundResult==1) {
            humanRoundWins++;
            roundCounter++;
        } else {
            computerRoundWins++;
            roundCounter++;
        }
    }
}
  

function RoundofRPS(roundCounter) {
    let humanChoice = humanInput();
    let computerChoice = computerPlay();
    return evaluateRPSResult(humanChoice, computerChoice, roundCounter);
}

function computerPlay(){
    return normalizeComputerPlay(Math.ceil((Math.random()*100)/33));
}

function normalizeComputerPlay(randomGenNum){
    if (randomGenNum==1) {
        return "rock";
    } else if (randomGenNum==2) {
        return "scissors";
    } else {
        return "paper";
    }
}

function humanInput() {
    let humanChoice = prompt("Please enter a choice of Rock, Paper, or Scissors");
    return humanChoice.toLowerCase();
}

function evaluateRPSResult(humanChoice, computerChoice, roundCounter) {

    if (humanChoice == computerChoice) {
        logRound(roundCounter, "Tie. Replay Round.");
        return 0;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        logRound(roundCounter, `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        return 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        logRound(roundCounter, `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        return 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        logRound(roundCounter, `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        return 1;
    } else {
        logRound(roundCounter, `Computer Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        return 2;
    }

}

function logRound(roundCounter, string) {
    let elementID = "result"+roundCounter;
    let element = document.getElementById(elementID);
    element.innerHTML = roundCounter + ". " +string;
}

function clearResults() {
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "";
    document.getElementById("result5").innerHTML = "";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let btn = document.getElementById("start-button");
btn.addEventListener("click", BestOfFiveRPSGame);