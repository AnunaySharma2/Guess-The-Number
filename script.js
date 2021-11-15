'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let highScore = 0

// console.log(secretNumber);

let score = Number(document.querySelector(".score").textContent);

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "⛔ No number!";
    }
    else if (secretNumber === guess && score > 0) {
        document.querySelector(".message").textContent = "✅ Correct Number";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = secretNumber;
        if(highScore < score){
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
    }
    else if (secretNumber > guess && score > 0) {
        document.querySelector(".message").textContent = "⛔ Too low";
        score--;
    }
    else if (secretNumber < guess && score > 0) {
        document.querySelector(".message").textContent = "⛔ Too high";
        score--;
    }
    if (score == 0) {
        document.querySelector(".message").textContent = "😣 You lost the game";
        document.querySelector(".score").textContent = 0
    }
    if (score > 0) {
        document.querySelector(".score").textContent = score
    }
})

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.floor(Math.random() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".guess").value = "";
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".number").textContent = "?";

    console.log(secretNumber);
})