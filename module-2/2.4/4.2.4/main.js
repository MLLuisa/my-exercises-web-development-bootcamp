"use strict";

const text = document.querySelector(".paragraph");

const text1 = document.createElement("p");
const finalText = document.createTextNode( "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia optio asperiores sint similique suscipit minus nihil aliquam laudantium delectusab, recusandae provident sit atque doloribus? Optio dolore rerum solutaplaceat.");
text1.appendChild(finalText);

text.addEventListener("mouseover", () => {
    document.body.appendChild(text1);
})