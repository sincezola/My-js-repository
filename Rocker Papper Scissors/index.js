// ROCKER PAPPER SCISSORS PROGRAM

const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");

let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];
    console.log(computerChoice); // Para ter certeza de que está funcionando corretamente.

    let result = "";

    if(playerChoice === computerChoice){
        result = "IT'S A TIE!";
    } else{
        switch(playerChoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;

            break;
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;

            break;
    }
}