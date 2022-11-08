document.querySelector("#title").innerText = "Pizza Emporium";
document.querySelector("#subtitle").innerText = "Literal Objects";

let text = document.querySelector('#messages');

const pizza = {
    crust: 'standard',
    toppings: 'cheese',
    size: 'large',
    buildPizza: function () {
        text.innerHTML = `Baking a ${this.size} ${this.crust} crust ${this.toppings} pizza just for you!`;
    },
    shoppingList: () => {
        let flour = 1;
        let ingredients = '';

        if (pizza.crust == 'thick') flour += 1;
        if (pizza.size == 'large') flour += 1;
        if (pizza.size == 'extra large') flour += 2;

        if (pizza.toppings == 'pepperoni' || pizza.toppings == 'All Meat') ingredients = 'pepperoni';
        if (pizza.toppings == 'Hawaiian' || pizza.toppings == 'Garden') ingredients = 'pineapple';
        if (pizza.toppings == 'Barbeque Chicken') ingredients = 'chicken';

        text.innerHTML = `You will need to purchase ${flour} cups of flour and 1 lb of ${ingredients}.`;
    }
};

document.querySelector('#thin').addEventListener('click', () => pizza.crust = 'thin');
document.querySelector('#standard').addEventListener('click', () => pizza.crust = 'standard');
document.querySelector('#thick').addEventListener('click', () => pizza.crust = 'thick');

document.querySelector('#cheese').addEventListener('click', () => pizza.toppings = 'cheese');
document.querySelector('#pepperoni').addEventListener('click', () => pizza.toppings = 'pepperoni');
document.querySelector('#allMeat').addEventListener('click', () => pizza.toppings = 'All Meat');
document.querySelector('#hawaiian').addEventListener('click', () => pizza.toppings = 'Hawaiian');
document.querySelector('#veggie').addEventListener('click', () => pizza.toppings = 'Garden');
document.querySelector('#bbq').addEventListener('click', () => pizza.toppings = 'Barbeque Chicken');

document.querySelector('#small').addEventListener('click', () => pizza.size = 'small');
document.querySelector('#medium').addEventListener('click', () => pizza.size = 'medium');
document.querySelector('#large').addEventListener('click', () => pizza.size = 'large');
document.querySelector('#xl').addEventListener('click', () => pizza.size = 'extra large');

document.querySelector('#build').addEventListener('click', () => pizza.buildPizza());
document.querySelector('#shopping').addEventListener('click', () => pizza.shoppingList());