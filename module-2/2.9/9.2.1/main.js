// No terminado

"use strict";

const adalabers = [
{
    name: "Maria",
    age: 29,
    job: "diseladora",
 },
{
    name: "Lucia",
    age: 31,
    job: "ingeniera química",
 },
 {
    name: "Susana",
    age: 34,
    job: "periodista",
 },
 {
    name: "Rocio",
    age: 25,
    job: "actriz",
 },
{
    name: "Immaculada",
    age: 21,
    job: "diseñadora",
}
];

function countAdalabers() {
    for (let i = 0; i < adalabers.length; i++) {
        i = adalabers.length;
        console.log(`Las adalabers son ${i}`);
    }
};
console.log(countAdalabers());



function averageAge() {
    const media = (adalabers[0].age + adalabers[1].age + adalabers[2].age + adalabers[3].age + adalabers[4].age) / adalabers.length;
    console.log(`La edad media de las adalabers es de ${media} años`);
}
console.log(averageAge());

 