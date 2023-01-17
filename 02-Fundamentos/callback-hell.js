

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
    const empleado = empleados.find(e=>e.id === idEmpleado)?.nombre;
    if(empleado) 
        callback(null, empleado);
    else
        callback (`Empleado con id ${idEmpleado} no existe`, null);
}

const getSalario = (idEmpleado, callback)=>{
    const salario = salarios.find(s=>s.id===idEmpleado)?.salario;
    if(salario)
        callback(null, salario);
    else
        callback(`Salario para empleado con id ${idEmpleado} no existe`);
}

const idEmpleado = 3;

getEmpleado(idEmpleado, (err, empleado)=>{
    if(err) {
        console.log('Error');
        return console.log(err);
    }
    //console.log('Empleado existe.');
    getSalario(idEmpleado, (err, salario)=>{
        if(err){
            return console.log(err);
        }
        console.log('El empleado:', empleado,' tiene un salario de', salario);
    })
});

