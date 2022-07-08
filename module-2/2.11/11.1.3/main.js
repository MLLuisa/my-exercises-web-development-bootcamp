"use strict";


function bestLostNumber() {
    const lostNumbers = [4, 8, 15, 16, 23, 42];
    const evenNumberLost = [];
    const multipleThree = [];
    for (let i = 0; i < lostNumbers.length; i++) {
        if(lostNumbers[i] % 2 === 0) {
            evenNumberLost.push(lostNumbers[i]);
        } else if(lostNumbers[i] % 3 === 0) {
            multipleThree.push(lostNumbers[i]);
        }
    } 
    console.log("soy concat", evenNumberLost.concat(multipleThree));
    return {evenNumberLost, multipleThree};
}  

console.log(bestLostNumber());

