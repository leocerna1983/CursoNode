const deadpool = {
    nombre : 'Wade',
    apellido : 'Winston',
    poder : 'Regeneración',
    edad : 50,
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder} ${this.edad}`;
    }
}

function imprimeHeroe({nombre, apellido, poder, edad = 0})
{
    nombre = 'Leonidas';
    //const {nombre, apellido, poder, edad = 0} = heroe;
    console.log(nombre, apellido, poder, edad);
}


//console.log(deadpool.getNombre());

//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

const heroes = ['Deadpool','Superman','Batmant']
const [, , h3] = heroes;
//const h1 = heores[2];
console.log(h3);
//imprimeHeroe(deadpool);