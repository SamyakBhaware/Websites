const rollButton = document.getElementById('roll-button');
const dice = document.getElementById('dice');
const result = document.getElementById('result');
const score = document.getElementById('score');
const yourSelection = document.getElementById('yourSelection');

let guessedNumber = 0;
let scoreNumber = 0



const guess1 = document.getElementById('1'); 
const guess2 = document.getElementById('2'); 
const guess3 = document.getElementById('3'); 
const guess4 = document.getElementById('4'); 
const guess5 = document.getElementById('5'); 
const guess6 = document.getElementById('6'); 
const reset = document.getElementById('reset'); 

function rollDice() {
    dice.innerHTML = Math.floor(Math.random() * 6) + 1;
}

rollButton.addEventListener("click", () => {
    if(guessedNumber == 0){
    alert("Please guess the number first");
    return;
    }
    else{
        rollDice();
        if(dice.innerHTML == guessedNumber){
        result.innerHTML = "You guessed right!"
        scoreNumber = scoreNumber + 1;
        score.innerHTML = scoreNumber;
        
         
        }
        else{
            result.innerHTML = "Wrong guess! Try again.";
            scoreNumber = scoreNumber - 1;
            score.innerHTML =  scoreNumber;

        }
        guessedNumber = 0;
    }
})

guess1.addEventListener("click", () => {
    guessedNumber = 1;
    console.log("guessed number = 1")
    yourSelection.innerHTML = guessedNumber;
})

guess2.addEventListener("click", () => {
    guessedNumber = 2;
    console.log("guessed number = 2")
    yourSelection.innerHTML = guessedNumber;

})

guess3.addEventListener("click", () => {
    guessedNumber = 3;
    console.log("guessed number = 3")
    yourSelection.innerHTML = guessedNumber;

})

guess4.addEventListener("click", () => {
    guessedNumber = 4;
    console.log("guessed number = 4")
    yourSelection.innerHTML = guessedNumber;

})

guess5.addEventListener("click", () => {
    guessedNumber = 5;
    console.log("guessed number = 5")
    yourSelection.innerHTML = guessedNumber;

})

guess6.addEventListener("click", () => {
    guessedNumber = 6;
    console.log("guessed number = 6")
    yourSelection.innerHTML = guessedNumber;

})

reset.addEventListener("click", () => {
    dice.innerHTML = 0;
    result.innerHTML = "";
    score.innerHTML = 0;
    yourSelection.innerHTML = "";
})


