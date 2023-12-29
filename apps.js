const { alias } = require('yargs')
const {crearArchivoMultiplicar} = require ('./helpers/multiplicar')
const yargs = require('yargs')
const argv = require('./config/yargs')

crearArchivoMultiplicar(argv.b, argv.l ,argv.h).

then((nombreArchivo) => {
    console.log(nombreArchivo.rainbow, 'creado')
}).catch((err) => {
    console.log(err)
});