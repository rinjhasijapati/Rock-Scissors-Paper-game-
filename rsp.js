const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    const randNum = Math.floor(Math.random() *3) +1;

    switch(randNum){
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "SCISSORS";
            break;
        case 3:
            computer = "PAPER";
            break;

    }
}

function checkWinner(){
    if(player == computer){
        return  "It's a draw!!";
    }else if(computer == "ROCK" && player == "SCISSORS" || computer == "SCISSORS" && player == "PAPER" || computer == "PAPER" && player == "ROCK"){
        return  "You Lose😢 Computer Wins";
    }else{
        return "You Won 🥳👑";
    }
}