"use strcit";

// Funcion multiplicacion
//Version function arrow

const multiply = (num1, num2) => `El resultado de la multiplicacion es ${num1 * num2}`;
console.log(multiply(5,5));

//Version normal

const multiply1 = (num1,num2) => { 
    const totalMultiply = num1 * num2;
    return `El resultado de la multiplicacion es ${totalMultiply}`;
}
console.log(multiply1(5,5));


const add = (num3, num4) => `El resultado de la suma es ${num3 + num4}`;
console.log(add(20,10));

const word = (parameter) => `Voy a pedirme un ${parameter}`;
console.log(word("cafe"));

