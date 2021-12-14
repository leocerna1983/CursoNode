
// console.timeEnd('Fin');
// setTimeout(function () {
//     console.log('Hola mundo');
// } , 1000);

// console.timeEnd('Fin');

const getUsuarioByID= (id, callback)=>{
    const user = {
        id,
        nombre : 'Fernando'
    }
    setTimeout(()=>{
        callback(user);
    }, 1500);    
}

getUsuarioByID(1983, (usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});


