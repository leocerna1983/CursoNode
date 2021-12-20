const argv = require('./config/yargs');
const {crearArchivo} = require("./helpers/multiplicar");
const valor = 1;

console.clear();

console.log(process.argv);
console.log(argv);
//console.log(argv.nivel);
//console.log(argv.base);

//const [,,arg3='base=5'] = process.argv;
//const [,base] =arg3.split('=');

//console.log(base);
crearArchivo(argv.base, argv.listar, argv.h)
.then(resultado => console.log(resultado))
.catch(error=> console.log(error));

