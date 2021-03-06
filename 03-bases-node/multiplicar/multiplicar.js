const fs = require('fs');
// const fs = require('express');
// const fs = require('./fs');

let listarTabla = (base, limite) => {

    for (let i = 1; i * base < limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-hasta-limite-${limite}.txt`, data, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-del-${base}-limite-${limite}.txt`);
            }

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}