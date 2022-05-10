const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();


// const [ , , arg3 = 'base5'] = process.argv;
// const [ , base = 5] = arg3.split('=');

// console.log(argv);

// console.log('base: yargs', argv.base);



// const base = 2;
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));



