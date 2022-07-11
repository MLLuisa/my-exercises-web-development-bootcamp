"use strict";

const button = document.querySelector('.js-button');
const image = document.querySelector('.js-image');

function getChihuahua() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
    .then((response) => response.json())
    .then((data) => {
        image.src = data.message;
        image.alt = "un Chihuahua";
    });
}

button.addEventListener("click" , getChihuahua);