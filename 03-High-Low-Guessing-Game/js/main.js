document.querySelector('#title').innerText = 'Guessing Game';
document.querySelector('#subtitle').innerText = 'Loops';

// pick a random number between 1 and 15 inclusive
const correctNum = Math.floor(Math.random() * 15) + 1;
let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;

function evalGuess() {
    gamerGuess = document.querySelector('#guess').value;

    let feedback = document.querySelector('#feedback');

    if (gamerGuess == correctNum) {
        feedback.innerText = 'You got it! Congratulations! That was a pro gamer move.';
        totalGuesses += 1;
        giveAward();
    }
    else if (gamerGuess > 15 || gamerGuess < 1) {
        feedback.innerText = 'You\'re wasting your time silly, you need to pick a number between 1 and 15.';
    }
    else if (gamerGuess > correctNum) {
        feedback.innerText = 'You\'re almost there, but you need to guess lower.';
        totalGuesses += 1;
    }
    else if (gamerGuess < correctNum) {
        feedback.innerText = 'You\'re so close, but you have to guess higher.';
        totalGuesses += 1;
    }

    let attempts = document.querySelector('#attempts');
    attempts.innerText = totalGuesses;
}

function giveAward() {
    let award = document.querySelector('#ribbon');

    switch(totalGuesses) {
        case 1:
        case 2:
        case 3:
            award.style.backgroundImage = 'url(../images/blue.png)';
            break;
        case 4:
        case 5:
        case 6:
            award.style.backgroundImage = 'url(../images/red.png)';
            break;
        default:
            award.style.backgroundImage = 'url(../images/yellow.png)';
    }
}