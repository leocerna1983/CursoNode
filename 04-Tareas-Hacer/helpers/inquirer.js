const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');

require('colors');

const menuOpts=[{
    type: 'list',
    name : 'opcion',
    message: '¿Qué desea hacer?',
    choices:[
        {value:'1', name: '1. Crear tarea'},
        {value:'2', name: '2. Listas tareas'},
        {value:'3', name: '3. Listar tareas completadas'},
        {value:'4', name: '4. Listar tareas pendientes'},
        {value:'5', name: '5. Completar tarea(s)'},
        {value:'6', name: '6. Borrar tarea'},
        {value:'0', name: '0. Salir \n'}
    ]
}];

const menuEnter=[{
    type: 'input',
    name : 'enter',
    message: `\nPresione ${'ENTER'.green} para continuar\n`
}];


const inquirerMenu = async()=>{
    console.clear();
    console.log('================================'.green);
    console.log('       SELECCION DE MENU'.green);
    console.log('================================'.green);

    const {opcion} = await inquirer.prompt(menuOpts);
    return opcion;
};

const pausa = async ()=>
{
    await inquirer.prompt(menuEnter);
}


module.exports={
    inquirerMenu,
    pausa
}