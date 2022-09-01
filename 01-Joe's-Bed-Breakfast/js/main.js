document.querySelector('#company').innerHTML = 'Joe\'s Bed and Breakfast';
document.querySelector('#slogan').innerHTML = 'Best B&B this side of Vernal!';
document.querySelector('#pageName').innerHTML = 'Joe\'s Bed and Breakfast';

let userName = prompt('What is your name?');
let message = `Hello ${userName}, welcome to the finest lodging in Utah!`;
document.querySelector('#greeting').innerHTML = message;