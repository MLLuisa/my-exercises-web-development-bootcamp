"use strict";

const btn = document.querySelector(".button");

const eventObj = {
    name: "Super event",
    place: "Madrid"
};

btn.addEventListener("click" , () => {
    console.log(eventObj);
})