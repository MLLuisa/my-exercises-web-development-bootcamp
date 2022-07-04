"use strict";
const numbers = [1,2,3,4,5];
numbers.push(6);

const calculation = (numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] + numbers[5]) / numbers.length;
const mediaAll = calculation;

function average() {
    const media = mediaAll;
    return media;
}
console.log(average(numbers));

// for ( let i = 1; i < numbers.length; i++) {
//     console.log(calculation);
// }