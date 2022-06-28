"use strict";

const Iva = 0.21;
function tickeIva(num) {
    return("Precio sin IVA: " + num + ", " + "IVA: " + Iva + " y " + "Total: " + (num * Iva));
} 

console.log(tickeIva(10));