const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTable } = require('./multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTable(argv.base, argv.limite)
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo}`));
        //   console.log('Crear');
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
// let base = '88';

// console.log(process.argv);

//   let argv2 = process.argv;

//   console.log('limite', argv.limite);
//   console.log(argv2);

// let parametro = argv[2];

// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${base}`))
//     .catch(err => console.log(err));00g