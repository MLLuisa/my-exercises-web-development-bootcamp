"use strict";

const adalaber1 = {
    nombre: "Susana",
    años: 34,
    trabajo: "periodista",
    run: (loguear) => `Estoy ${loguear}`,
    runMaraton: (distance) => `Estoy corriendo un maraton de ${distance}`
};

console.log(adalaber1.run("corriendo"));
console.log(adalaber1.runMaraton(50));

