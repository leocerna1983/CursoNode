
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

const getInfoUsuario = async (id)=>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El salario del empleado ${empleado} es ${salario}`    
    } catch (error) {
        return error;
    }
}


const id = 4;
getInfoUsuario(id)
    .then(result => console.log(result))
    .catch(err=> console.log(err))
    .finally();

