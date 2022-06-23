"use strict";

const element = document.querySelector("#element");

const firstDogImage = "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage = "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage = "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

element.innerHTML=`<div class="dogs-list-wrapper">
  <ul>
    <li><img src=${firstDogImage}/><p>${firstDogName}</p></li>
    <li><img src=${secondDogImage}/><p>${secondDogName}</p></li>
    <li><img src=${thirdDogImage}/><p>${thirdDogName}</p></li>
  </ul>
</div>`

