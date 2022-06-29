"use strict";

const caja = (par1, par2, par3, par4) => {
    // border-box = true --> width + padding + border-box
    if(par1) {
        const totalDimensions = par2 + par3 + par4;
        return `El ancho del contenido es: ${par2}px y el ancho total de la caja es: ${totalDimensions}px`;
    }

    return `El ancho del contenido es: ${par2}px y el ancho total de la caja es: ${par2}px`;
}

const totalBorderBoxDimensions = caja(true,30,5,5);
const totalContentBoxDimensions = caja(false,30,5,5);
console.log(totalBorderBoxDimensions);
console.log(totalContentBoxDimensions);
