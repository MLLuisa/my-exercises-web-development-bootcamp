"use strict";

const divClass = document.querySelector(".divClass");
// div.classList.add("warning");

if (divClass.classList.contains("warning")) {
    divClass.innerHTML = `<div class="divClass>
    <h1>AVISO</h1>
    <p>Tengo cuidado</p>
  </div>`;
} else if (divClass.classList.contains("error")) {
    divClass.innerHTML = `<div class="divClass">
    <h1>ERROR</h1>
    <p>Hay algunos errores</p>
  </div>`;
} else {
    divClass.innerHTML = `<<div class="divClass">
    <h1>CORRECTO</h1>
    <p>Los datos son correctos</p>
  </div>`;
}