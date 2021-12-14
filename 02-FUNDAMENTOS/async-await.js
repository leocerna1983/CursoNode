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



//getEmpleado(id);
//getSalario(id);

const getInfoUsuario = async(id)=>{
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id);
        return `El empleado ${empleado} tiene un salario de ${salario}`;
    } catch (err) {
        throw err;
    }
}

getInfoUsuario(id)
.then(msg=>console.log(msg))
.catch(err=>{
    console.log(err);});