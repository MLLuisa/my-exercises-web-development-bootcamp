"use strict";

const inputLight = document.querySelector('.js-inputLight');
const inputDark = document.querySelector('.js-inputDark');
const main = document.querySelector('.js-main');

const theme = localStorage.getItem("theme");
if(theme === "dark") {
    main.classList.add("darkClass");
} else {
    main.classList.add("lightClass");
}

function clickDark() {
    main.classList.remove("lightClass");
    main.classList.add("darkClass");
    let dark = inputDark.value;
    dark = inputDark.value;
    localStorage.setItem("theme" , "dark");
}

function clickLight() {
    main.classList.remove("darkClass");
    main.classList.add("lightClass");
    let light = inputLight.value;
    light = inputLight.value;
    localStorage.setItem("theme" , "light");
}

inputDark.addEventListener("click" , clickDark);
inputLight.addEventListener("click" , clickLight);