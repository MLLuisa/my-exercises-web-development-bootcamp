"use strict";
// cada tres años hay luna llena que ilumina el sol (luna del cazador);
// en el 2017 se vio el 5 de octubre;
// hay que hacerun console log con las proximas 15 lunas;

let year = 2017;
let day = "5 de Octubre";
for (let year = 2017; year < 2062; year += 3) {
    console.log(`Las proximas Luna del cazador seran el ${day} en el año ${year}.`);
}