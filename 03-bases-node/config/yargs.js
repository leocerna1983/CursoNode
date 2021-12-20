const argv = require('yargs')
    .option('b', {
        alias:'base',
        type:'number',
        demandOption: true, 
        description:'Descripción de Base'
    }).option('l', {
        alias:'listar',
        type:'boolean',
        default:'false', 
        description:'Descripción de Listar'
    }).option('h', {
        alias:'hasta',
        type:'number',
        default:'10', 
        description:'Hasta valor tabla de multiplicar'
    })
    .check((argv, options)=>{
        console.log('yargs', argv);
        if(isNaN(argv.b))
            throw 'Se encontro un error en el parametro, verifique'
        return true;
    })
    .argv;
 module.exports=argv;