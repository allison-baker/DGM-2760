document.querySelector('#title').innerText = 'Guessing Game';
document.querySelector('#subtitle').innerText = 'Loops';

// pick a random number between 1 and 15 inclusive
const correctNum = Math.floor(Math.random() * 15) + 1;
let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;

function evalGuess() {
    totalGuesses += 1;
    gamerGuess = document.querySelector('#guess').value

    let attempts = document.querySelector('#attempts');
    attempts.innerText = totalGuesses;

    let feedback = document.querySelector('#feedback');

    if (gamerGuess == correctNum) {
        feedback.innerText = 'You got it! Congratulations! That was a pro gamer move.';
    }
    else if (gamerGuess > 15 || gamerGuess < 1) {
        feedback.innerText = 'You\'re wasting your guesses silly, you need to pick a number between 1 and 15.';
    }
    else if (gamerGuess > correctNum) {
        feedback.innerText = 'You\'re almost there, but you need to guess lower.';
    }
    else if (gamerGuess < correctNum) {
        feedback.innerText = 'You\'re so close, but you have to guess higher.';
    }

}