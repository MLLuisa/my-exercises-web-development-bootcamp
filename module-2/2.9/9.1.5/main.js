
// No terminado
"use strict";

const inputOne = document.querySelector('.js_inputOne');
const btn = document.querySelector('.js_button');
const valueOne = inputOne.value;


const totalValue = [valueOne];

function handleclick() {
    totalValue[0] = valueOne;
    return totalValue;
}

for (const movies of totalValue) {
    console.log(`A mi tambien me encanto ${valueOne}.Tenemos mucho en comun humana!`);
};

btn.addEventListener("click" , handleclick)
    

