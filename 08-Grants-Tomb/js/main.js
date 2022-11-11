document.querySelector("#title").innerText = "Grant's Tomb";
document.querySelector("#subtitle").innerText = "Literal Objects";

const question = {
    stem: 'Who is buried in Grant\'s Tomb?',
    option1: 'Tom',
    option2: 'Grant',
    option3: 'Sarah',
    option4: 'Jennifer',
    correct: 2,
    display: () => {
        document.querySelector('#stem').textContent = question.stem;
        document.querySelector('#answer1').textContent = question.option1;
        document.querySelector('#answer2').textContent = question.option2;
        document.querySelector('#answer3').textContent = question.option3;
        document.querySelector('#answer4').textContent = question.option4;
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector('#feedback').textContent = 'You are correct. Grant remains in his tomb another day.';
        } else {
            document.querySelector('#feedback').textContent = 'You have chosen incorrectly. Grant is now rising from his tomb. Beware.';
        }
    }
}

document.querySelector('#answer1').addEventListener('click', () => question.check(1));
document.querySelector('#answer2').addEventListener('click', () => question.check(2));
document.querySelector('#answer3').addEventListener('click', () => question.check(3));
document.querySelector('#answer4').addEventListener('click', () => question.check(4));

question.display();