"use strict";

// No terminado

const runners = [
    { name: "Gregory Goyle", time: 56, student: true },
    { name: "Nymphadora Tonks", time: 9, student: false },
    { name: "Luna Lovegood", time: 45, student: true },
    { name: "Cedric Diggory", time: 28, student: true },
    { name: "Cho Chang", time: 35, student: true },
  ];

const runnerStudent = runners.reduce((runner) => runner.student === true);

console.log(runnerStudent);