const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
const winText = document.getElementById("winText")

let attempts = 0;
let guess;
let running = true;

function error() {
    window.alert("Please enter a valid Number");
}

document.getElementById("startButton").onclick = function(){
    console.log("Game Started!")
    console.log(`The number is ${answer}`)

    while (running) {
        guess = Number(window.prompt(`Guess a number between ${minNum} - ${maxNum}`));
        console.log(typeof guess, guess);

        if (isNaN(guess)) {
            error();
        } else if (guess < minNum || guess > maxNum) {
            error();
        } else {
            attempts++;
            if (guess < answer) { // The answer is too LOW
                window.alert(`${guess} is too LOW. Try again!`);
            } else if (guess > answer) { // The answer is too HIGH
                window.alert(`${guess} is too HIGH. Try again!`);
            } else { // He won
                window.alert(`Congratulations! You guessed the correct number in ${attempts} attempts.`);
                running = false; // End the game

                winText.textContent = "You WON!! Congratulations!"
            }
        }
    }
}