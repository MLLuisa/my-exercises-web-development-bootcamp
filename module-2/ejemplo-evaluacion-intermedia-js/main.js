"use strict";
const select = document.querySelector('.js-select');
const button = document.querySelector('.js-btn');
const face = document.querySelector('.js-face');
const main = document.querySelector('.js-main');

const randomNumber = (max) => {
    return parseInt(Math.random()*max);
}

function changeBackground() {
    const number = randomNumber(100);
    if(number % 2 === 0) {
        console.log("soy par");
        main.classList.add("yellow");
        main.classList.remove("orange");
    } else {
        main.classList.remove("yellow");
        main.classList.add("orange");
    }
}

function handleClick(ev) {
    ev.preventDefault();
    const selectInput = select.value;
    face.innerHTML = selectInput;
    changeBackground();
}

button.addEventListener('click' , handleClick);
