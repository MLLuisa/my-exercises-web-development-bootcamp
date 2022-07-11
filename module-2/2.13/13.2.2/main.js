"use strict";
//no terminado

const inputValue = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const name = document.querySelector('.js-name');
const repository = document.querySelector('.js-repository');
const avatar = document.querySelector('.js-avatar');

function gitHubProfile() {
    fetch('https://api.github.com/users/gootyfer')
    .then((response) => response.json())
    .then((data) => {
        let valueProfile = inputValue.value;
        valueProfile = inputValue.value;
        avatar.src = data.avatar_url;
        name.innerHTML = data.login;
        repository.innerHTML = data.public_repos;
    })
}


button.addEventListener("click" , gitHubProfile);