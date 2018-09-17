  // const multiplicar = require('./multiplicar.js');

  const opts = {
          base: {
              demand: true,
              alias: 'b'
          },
          limite: {
              alias: 'l',
              default: 10
          }
      }
      //   const argv = require('yargs')
      //       .command('listar', 'imprime en consola la tabla de multiplicar', {
      //           base: {
      //               demand: true,
      //               alias: 'b'
      //           },
      //           limite: {
      //               alias: 'l',
      //               default: 10
      //           }
      //       })
      //       .command('Crear', 'genera un archivo con la tabla de miltiplicar', {
      //           base: {
      //               demand: true,
      //               alias: 'b'
      //           },
      //           limite: {
      //               alias: 'l',
      //               default: 10
      //           }
      //       })
      //       .help()
      //       .argv;
  const argv = require('yargs')
      .command('listar', 'imprime en consola la tabla de multiplicar', opts)
      .command('Crear', 'genera un archivo con la tabla de miltiplicar', opts)
      .help()
      .argv;


  module.exports = {
      argv
  }