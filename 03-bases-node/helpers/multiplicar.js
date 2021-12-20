const fs = require('fs');
const color = require('colors');
console.clear();
const crearArchivo = async (base = 5, listar=false, hasta)=>{


    return new Promise((resolve, reject)=>{
        try {
            console.log('=================================')
            console.log(`==========Base ${base}=================`)
            console.log('=================================')
        
            let salida = '';
            for (let index = 1; index <= hasta; index++) {
                salida += `${base} x ${index} = ${base*index} \n`;
            }
            if(listar===true)
                console.log(salida.yellow);
            fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
            return `tabla-${base}.txt CREADO!!`;
        
        } catch (error) {
            throw error;           
        }
    })
}


module.exports={
    crearArchivo
}