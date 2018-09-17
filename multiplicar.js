const fs = require('fs')

let listarTable = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject(`La base ${base}, no es número`);
            return;
        }
        let data = '';
        console.log('==================================='.trap);
        console.log(`=======Tabla de ${base}============`.white);
        console.log('==================================='.red);

        for (let index = 1; index <= limite; index++) {
            console.log(`${base} * ${index} = ${base * index} \n`);
        }
    });
}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (isNaN(base)) {
            reject(`La base ${base}, no es un número`);
            return;
        }
        let data = '';

        for (let index = 0; index <= limite; index++) {
            data += `${base} * ${index} = ${base * index} \n`;

        }

        fs.writeFile(`./tablas/tabla_${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla_${ base }-al-${limite}`);
        });
    });
}

module.exports = {
    crearArchivo,
    listarTable
}