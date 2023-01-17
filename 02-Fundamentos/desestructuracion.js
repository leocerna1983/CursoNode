const deadpool = {
    nombre :  'Wade',
    apellido : 'Wiston',
    poder :  'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}


// const nombre1 = deadpool.nombre;
// const apellido1 = deadpool.apellido;
// const poder1 = deadpool.poder;

const {nombre, apellido, poder} = deadpool;

function deses({nombre, apellido, poder}) {
    console.log(`${nombre} ${apellido} ${poder}`);
}

deses(deadpool);

//console.log(deadpool.getNombre())

const heroes = ['uno','dos','tres']
const [uno, dos, tres] = heroes;

console.log( `${uno} ${dos} ${tres}`)
