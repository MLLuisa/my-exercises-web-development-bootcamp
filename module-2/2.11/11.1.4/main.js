"use strict";

const list = document.querySelector('.js-list');
const listTrue = document.querySelector('.js-list-true');
const paragraph = document.querySelector('.js-task-list');

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
    },
  ];


// Vamos a por una tarea
list.innerHTML = `<ul class="js-list">
    <li class="js-list-true text">${tasks[0].name}</li>
    </ul>`
    if (tasks[0].completed !== true) {
        listTrue.classList.add("text");
    }

// listado de tareas

for (let i = 0; i < tasks.length; i++) {
    paragraph.innerHTML += `<ul class="js-task-list">
    <li>${tasks[i].name}</li>
    </ul>`;
}
for (let i = 0; i < tasks.length; i++) {
    if(tasks[i].completed === true) {
        console.log("soy tarea completada", tasks[i]);
        paragraph.classList.add("text");
    }
}


