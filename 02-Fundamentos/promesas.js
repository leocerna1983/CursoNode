
const empleados = [
    {
        id: 1,
        nombre:'Fernando'
    },
    {
        id: 2,
        nombre:'Linda'
    },
    {
        id: 3,
        nombre:'Karen'
    }
];

const salarios = [
    {
        id: 1,
        salario:1000
    },
    {
        id: 2,
        salario:1500
    }
];


const getEmpleado = (idEmpleado, callback) => {
    
    const promesa = new Promise((resolve, reject)=>{
        const empleado = empleados.find(e=>e.id === idEmpleado)?.nombre;
        empleado?resolve(empleado):reject(`No existe empleado con Id: ${idEmpleado}`);
    });
    return promesa;
}

const getSalario = (idEmpleado, callback) => {
    const promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find(e=>e.id===idEmpleado)?.salario;
        salario?resolve(salario):reject(`No existe salario para el empleado: ${idEmpleado}`);
    });
    return promesa;
}
const id = 4;
/*getEmpleado(id)
.then(empleado=>{
    getSalario(id)
    .then(s=>{console.log('El Empleado ',empleado,' tiene un salario de ', s);})
    .catch(err=>console.log('El empleado ',empleado,' no tiene salario registrado'));
})
.catch(err=> console.log(err));*/

// getSalario(id)
// .then(salario=>console.log(salario))
// .catch(err=> console.log(err));


let nombre;
getEmpleado(id)
.then(empleado => {
    nombre = empleado;
    return getSalario(id)
})
.then(salario=>console.log(`El empleado ${nombre} tiene un saladio de ${salario}`))
.catch(err=>console.log(err));

