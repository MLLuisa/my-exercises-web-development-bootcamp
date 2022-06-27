"use strict";

const input = document.querySelector(".input");
const button = document.querySelector(".button");

var inputNombre = document.getElementById("name");

button.addEventListener("click", () => {
    console.log(inputNombre.value = "Hola " + input.value);
});