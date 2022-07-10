"use strcit";

const times = [56, 9, 45, 28, 35];

const media = times.reduce((num1, num2) => (num1 + num2)) / times.length;

console.log(media);