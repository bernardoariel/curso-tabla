

const { option } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')



console.clear()

// console.log(process.argv);
console.log(argv);

// console.log('base: yargs' , argv.base)

/* const [,,arg3 = 'base=5'] = process.argv
const [,base = 5] = arg3.split('=') */

// console.log(base)


// let base = 8

// crearArchivo(base)
/* fs.writeFile(`tabla-${base}.txt`, salida,(err)=>{
    if(err) throw err;
    console.log(`tabla-${5} fue creado`)
}) */

crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))