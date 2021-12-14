
const {crearArchivo} = require("./helpers/multiplicar");
const valor = 1;
crearArchivo(valor)
.then(resultado => console.log(resultado))
.catch(error=> console.log(error));
