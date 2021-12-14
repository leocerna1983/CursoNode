const empleados = [
    {id:1, nombre: 'Fernando'},
    {id:2, nombre: 'Linda'},
    {id:3, nombre: 'Karen'}
]

const salarios = [
   {id:1, salario:1000},
   {id:2, salario:1500}
]

const getEmpleado = (id)=>{
    const empleado = empleados.find(e=>e.id===id)?.nombre;    
    return new Promise((resolve, reject)=>{
        empleado?resolve(empleado):reject(`No existe empleado con id ${id}`);
    });
}

const getSalario = (id)=>{
    const salario = salarios.find(e=>e.id===id)?.salario;    
    return new Promise((resolve, reject)=>{
        salario?resolve(salario):reject(`No existe salario para el empleado con id ${id}`);
    });
}

const id = 4;
console.log(id);
// getEmpleado(id)
// .then(empleado =>     
//     getSalario(id)
//     .then(salario => console.log(`Empleado: ${empleado} tiene un Salario: ${salario}`))
//     .catch(err=> console.log(`Empleado: ${empleado} no tiene un Salario`)))
// .catch(err=> console.log(`No existe empleado con id ${id}`));

let nombre;
getEmpleado(id)
.then(empleado =>{
    nombre = empleado;     
    return getSalario(id)})
.then(salario => {console.log(`Empleado: ${nombre} tiene un Salario: ${salario}`);})
.catch(err=>console.log(err));