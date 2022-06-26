const oneYearDog = 15;
const secondYearDog = 9;
const thirdYearDog = 5;

const dogAge = 5;

if (dogAge >= 3) {
    console.log("You're dog is " + (thirdYearDog * dogAge) + " years old");
} else if (dogAge === 2) {
    console.log("You're dog is " + secondYearDog + " years old");
} else {
    console.log("You're dog is " + oneYearDog + " years old");
}