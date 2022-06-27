"use strict";

const paragraph = document.querySelector(".paragraph");
const button = document.querySelector(".button");

button.addEventListener("click", () => {
    paragraph.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió!";
});