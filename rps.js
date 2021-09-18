function playRound(event){
    let humanInput = event.currentTarget.myParam;
    let computerChoice = computerPlay();
    return evaluateRPSResult(humanInput, computerChoice);
}

function computerPlay(){
    let randomGenNum = Math.ceil((Math.random()*100)/33);
    if (randomGenNum==1) {
        return "rock";
    } else if (randomGenNum==2) {
        return "scissors";
    } else {
        return "paper";
    }
}

function evaluateRPSResult(humanChoice, computerChoice) {
    let logString;
    if (humanChoice == computerChoice) {
        logString = generateLogString("Tie. Replay Round.");
        log("result-round", logString);
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        logString = generateLogString(`<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result-round", logString);
        humanRoundWins++;
        log("human-score", "Human: " + humanRoundWins);
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        logString = generateLogString(`<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result-round", logString);
        humanRoundWins++;
        log("human-score", "Human: " + humanRoundWins);
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        logString = generateLogString(`<strong>Human Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result-round", logString);
        humanRoundWins++;
        log("human-score", "Human: " + humanRoundWins);
    } else {
        logString = generateLogString(`<strong>Computer Wins</strong> --- Human picked ${humanChoice}. Computer picked ${computerChoice}.`);
        log("result-round", logString);
        computerRoundWins++;
        log("computer-score", "Computer: " + computerRoundWins);
    }

    if (humanRoundWins == 5 || computerRoundWins == 5) {
        rock.removeEventListener("click", playRound, false);
        paper.removeEventListener("click", playRound, false);
        scissors.removeEventListener("click", playRound, false);
        document.getElementById("restart-button").style.visibility = 'visible';
        if (humanRoundWins == 5) {
            log("result", "Human Wins!");
        } else {
            log("result", "Computer Wins!");
        }
    }
}

function generateLogString(string) {
    return string;
}

function log(idElement, string) {
    let element = document.getElementById(idElement);
    element.innerHTML = string;
}

function clearData() {
    document.getElementById("restart-button").style.visibility = 'hidden';
    setUpButtonListeners()
    humanRoundWins = 0;
    computerRoundWins = 0;
    document.getElementById("result-round").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("human-score").innerHTML = "Human: 0";
    document.getElementById("computer-score").innerHTML = "Computer: 0";
}

function setUpButtonListeners() {
    let rock = document.getElementById("rock");
    rock.addEventListener("click", playRound, false);
    rock.myParam = "rock";

    let paper = document.getElementById("paper");
    paper.addEventListener("click", playRound, false);
    paper.myParam = "paper";

    let scissors = document.getElementById("scissors");
    scissors.addEventListener("click", playRound, false);
    scissors.myParam = "scissors";
}

let humanRoundWins = 0;
let computerRoundWins = 0;

setUpButtonListeners();

let reset = document.getElementById("restart-button");
reset.addEventListener("click", clearData);