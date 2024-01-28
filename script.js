let playerValue = 0;
let computerValue = 0;
let tieValue = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const retry = document.querySelector('.retry');

const result = document.querySelector('.result')
const counter = document.querySelector('.counter')
const playerScore = document.querySelector('.player');
const computerScore = document.querySelector('.computer');
const tieScore = document.querySelector('.tie');
const finalResult = document.querySelector('.finalResult');

function getComputerChoice(){
    const array = ['Rock', 'Paper', 'Scissors'];
    // randomize number based on array length, assign that as the array position   
    return array[Math.floor(Math.random() * array.length)]
}

//
function playRound(playerSelection, computerSelection){
    switch(true){
        case (playerSelection === computerSelection):
            tieValue++;
            return (`That's a tie!`);
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
            playerValue++;
            return(`You win! ${playerSelection} beats ${computerSelection}.`);
        default : computerValue++; 
            return(`You lose! ${computerSelection} beats ${playerSelection}.`);
    }
}      

function update(){
    playerScore.textContent = `Your score : ${playerValue}`;
    computerScore.textContent = `Opponent score : ${computerValue}`;
    tieScore.textContent = `Tie : ${tieValue}`;

    if(playerValue === 5 && playerValue > computerValue){
        finalResult.textContent = `Winner! Nice work!`  
        disable()
    } else if(computerValue === 5 && computerValue > playerValue){
        finalResult.textContent = 'Game Over, better luck next time.';
        disable()
    };
}

function disable(){
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function enable(){
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
};

result.textContent = 'Best out of 5, good luck!'

update();

function buttonChoice(option){
    const results = playRound(option, getComputerChoice());
    result.textContent = results;
    update();
}

rock.addEventListener('click', () => {
    buttonChoice('Rock');
});

paper.addEventListener('click', () => {
    buttonChoice('Paper');
});

scissors.addEventListener('click', () => {
    buttonChoice('Scissors');
});  

retry.textContent ='Retry?';

function resetGame(){
    result.textContent = 'Best out of 5, good luck!'
    finalResult.textContent = '';
    playerValue = 0;
    computerValue = 0;
    tieValue = 0;
    update();
    enable();
};

retry.addEventListener('click', resetGame);