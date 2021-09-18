async function BestOfFiveRPSGame(){
    clearResults();
    let humanRoundWins = 0;
    let computerRoundWins = 0;
    let roundCounter = 1;
    let scoreString;

    while (humanRoundWins != 3 && computerRoundWins != 3){
        await sleep(100);
        let roundResult;
        roundResult = RoundofRPS(roundCounter);
        if (roundResult==0){
        } else if (roundResult==1) {
            humanRoundWins++;
            roundCounter++;
            scoreString = generateLogString("Human", ": ", humanRoundWins);
            log("human-score", scoreString, 2);
        } else {
            computerRoundWins++;
            roundCounter++;
            scoreString = generateLogString("Computer", ": ", computerRoundWins);
            log("computer-score", scoreString, 2);
        }
    }

    declareFinalWinner(humanRoundWins);
}

function declareFinalWinner(humanRoundWins) {
    if (humanRoundWins==3) {
        log("result", "Human Wins.");
    } else {
        log("result", "Computer Wins.");
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
        logString = generateLogString(+ roundCounter, ". ", "Tie. Replay Round.");
        log("result"+roundCounter,logString);
        return 0;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        logString = generateLogString(roundCounter, ". ", `<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result"+roundCounter,logString);
        return 1;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        logString = generateLogString(roundCounter, ". ", `<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result"+roundCounter,logString);
        return 1;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        logString = generateLogString(roundCounter, ". ", `<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result"+roundCounter,logString);
        return 1;
    } else {
        logString = generateLogString(roundCounter, ". ", `<strong>Computer Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result"+roundCounter,logString);
        return 2;
    }
}

function generateLogString(prefix="", separator="", string) {
    return prefix + separator + string + "<br>";
}

function log(idElement, string) {
    let element = document.getElementById(idElement);
    element.innerHTML = string;
}

function clearResults() {
    document.getElementById("result1").innerHTML = "";
    document.getElementById("result2").innerHTML = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("result4").innerHTML = "";
    document.getElementById("result5").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("human-score").innerHTML = "Human: 0";
    document.getElementById("computer-score").innerHTML = "Computer: 0";
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

let btn = document.getElementById("start-button");
btn.addEventListener("click", BestOfFiveRPSGame);