// No terminado

"use strict";

(window).scroll(function(event){
    const scrollLeft = (window).scrollLeft();
    const scrollTop = (window).scrollTop();

    if (scrollTop >= 250) {
        document.getElementById("text-wrapper").style.backgroundColor = "red";
    }
    if (scrollTop < 50) {
        document.getElementById("text-wrapper").style.backgroundColor = "green";
    }
});