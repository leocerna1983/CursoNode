
setTimeout(()=>console.log("Hola mundo."), 2500);


const getUsuarioById = (id, getUsuarioCallback) => {
    const usuario = {
        id : id,
        nombre : 'Leonidas'
    }

    setTimeout(()=> {
        getUsuarioCallback(usuario);
    }, 5500)
}   


getUsuarioById(10, (usuario)=>console.log(`Usuario: ${usuario.nombre}`))  