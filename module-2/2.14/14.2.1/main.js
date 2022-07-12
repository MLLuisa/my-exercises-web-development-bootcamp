"use strict";

const inputLabel = document.querySelector('.js-input');
const textParag = document.querySelector('.js-text');


function handleKey(ev) {
    ev.preventDefault;
    const input = inputLabel.value;
    textParag.innerHTML = input;
    localStorage.setItem("name", input);
    console.log(input); // input
}


inputLabel.addEventListener("keyup" , handleKey);