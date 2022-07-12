"use strict";

// No terminado

const inputLabel = document.querySelector('.js-input');
const button = document.querySelector('.js-button');
const listUl = document.querySelector('.js-SwList');

let newCharacters = [];

function renderCharacters() {
    let html = "";
    for (const eachCharacter of newCharacters) {
        html += `<h5>Name:</h5><li>${eachCharacter.name}</li><h5>Gender:</h5><li>${eachCharacter.gender}</li>`;
    }
    listUl.innerHTML = html;
}

function handleClick(ev) {
    ev.preventDefault();
    const characterUser = inputLabel.value;
    fetch(`https://swapi.dev/api/people/?search=${characterUser}`)
    .then((reponse) => reponse.json())
    .then((data) =>  {
        console.log(data);
        newCharacters = data.results;
        renderCharacters();
        localStorage.getItem(newCharacters);
    })
}

button.addEventListener("click" , handleClick);

