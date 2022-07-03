"use strict";
const divElement = document.querySelector(".div");
const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis repellat dolor fugit accusantium cupiditate in laborum modi sint hic inventore ratione rem, officia neque sit distinctio facilis libero ullam?";
const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis repellat dolor fugit accusantium cupiditate in laborum modi sint hic inventore ratione rem, officia neque sit distinctio facilis libero ullam?";
const image = "http://via.placeholder.com/350x150";



divElement.innerHTML = ` <div class="div">
<h1>${content}</h1>
<p>${text}</p>
<img src="${image}" alt="placeholder" />
</div>`
