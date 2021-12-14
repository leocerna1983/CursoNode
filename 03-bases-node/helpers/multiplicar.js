const fs = require('fs');
console.clear();
const crearArchivo = async (base = 5)=>{


    return new Promise((resolve, reject)=>{
        try {
            console.log('=================================')
            console.log(`==========Base ${base}=================`)
            console.log('=================================')
        
            let salida = '';
            for (let index = 1; index <= 10; index++) {
                salida += `${base} x ${index} = ${base*index} \n`;
            }
            fs.writeFileSync(`tabla-${base}.txt`, salida);
            return `tabla-${base}.txt CREADO!!`;
        
        } catch (error) {
            throw error;           
        }
    })
}


module.exports={
    crearArchivo
}