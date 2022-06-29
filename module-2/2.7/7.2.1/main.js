"use strict";

const adalaber1 = {
    nombre: "Susana",
    años: 34,
    trabajo: "periodista",
    showBio: function () {
        return `Mi nombre es ${adalaber1.nombre}, tengo ${adalaber1.años} años y soy una ${adalaber1.trabajo}.`
    }
};

console.log(adalaber1.showBio());

const adalaber2 = {
    nombre: "Rocio",
    años: 25,
    trabajo: "actriz",
    showBio: function () {
        return `Mi nombre es ${adalaber2.nombre}, tengo ${adalaber2.años} años y soy ${adalaber2.trabajo}.`
    }
};

console.log(adalaber2.showBio());
