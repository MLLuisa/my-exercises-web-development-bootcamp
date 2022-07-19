"use strict";
const btn = document.querySelector('.js-btn');
const select = document.querySelector('.js-select');
const face = document.querySelector('.js-face');
const main = document.querySelector('.js-main');

const getRandom = (max) => {
    return parseInt(Math.random()*max)
}

const changeBackground = () => {
    const randomNumber = getRandom(100);
    console.log(randomNumber);

    if(randomNumber % 2 !== 0) {
        main.classList.add("orange");
        main.classList.remove("yellow");
        console.log("soy impar");
    } else {
        main.classList.add("yellow");
        main.classList.remove("orange");
    }
}

function updateMain() {
    const selectValue = select.value;
    face.innerHTML = selectValue;
}

function handleClick(ev) {
    ev.preventDefault();
    updateMain();
    changeBackground();
}

btn.addEventListener('click' , handleClick)
