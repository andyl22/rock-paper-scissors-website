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

    declareFinalWinner(humanRoundWins);
}

function declareFinalWinner(humanRoundWins) {
    if (humanRoundWins==3) {
        logRound("","Human Wins.");
    } else {
        logRound("","Computer Wins.");
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
    let logString;
    if (humanChoice == computerChoice) {
        logString = generateLogString(roundCounter, ".", "Tie. Replay Round.");
        logRound(roundCounter, logString);
        return 0;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        logString = generateLogString(roundCounter, ".", `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        logRound(roundCounter, logString);
        return 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        logString = generateLogString(roundCounter, ".", `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        logRound(roundCounter, logString);
        return 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        logString = generateLogString(roundCounter, ".", `Human Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        logRound(roundCounter, logString);
        return 1;
    } else {
        logString = generateLogString(roundCounter, ".", `Computer Wins.\nHuman picked ${humanChoice}. Computer picked ${computerChoice}.`);
        logRound(roundCounter, logString);
        return 2;
    }
}

function generateLogString(prefix="", separator="", string) {
    return prefix + separator + string;
}

function logRound(roundCounter="", string) {
    let elementID = "result"+roundCounter;
    let element = document.getElementById(elementID);
    element.innerHTML = string;
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