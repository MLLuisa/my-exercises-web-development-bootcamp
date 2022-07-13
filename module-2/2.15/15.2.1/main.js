"use strict";

const numbers = [1, 2, 3];

const itemOne = document.createElement("li");
const itemTwo = document.createElement("li");
const itemThree = document.createElement("li");

const contentOne = document.createTextNode(numbers[0]);
const contentTwo = document.createTextNode(numbers[1]);
const contentThree = document.createTextNode(numbers[2]);

itemOne.appendChild(contentOne);
itemTwo.appendChild(contentTwo);
itemThree.appendChild(contentThree);



const items = document.querySelector(".items");
items.appendChild(itemOne);
items.appendChild(itemTwo);
items.appendChild(itemThree);

