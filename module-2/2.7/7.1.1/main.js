"use strict";

const text = document.querySelector(".js_text");

const adalaber1 = {
    nombre: "Susana",
    años: 34,
    trabajo: "periodista"
};

text.innerHTML = "Mi nombre es " + adalaber1.nombre + ", " + "tengo " + adalaber1.años + " y soy " + adalaber1.trabajo + ".";

const text1 = document.querySelector(".js_text1");

const adalaber2 = {
    nombre: "Rocio",
    años: 25,
    trabajo: "actriz"
};

text1.innerHTML += "Mi nombre es " + adalaber2.nombre + ", " + "tengo " + adalaber2.años + " y soy " + adalaber2.trabajo + ".";