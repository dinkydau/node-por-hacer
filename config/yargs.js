const descripcion = {
    descripcion: {
        description: 'Permite ingresar la descripción',
        demand: true,
        alias: 'd'
    }
}
const condicionesActualizar = {
    descripcion: {
        description: 'Permite ingresar la descripción',
        demand: true,
        alias: 'd'
    },
    completado: {
        description: 'Permite ingresar si la tarea se completado',
        alias: 'c',
        default: true
    }
}
const argv = require('yargs')
    .command('crear', 'Crea las tareas por hacer.', descripcion)
    .command('listar', 'Genera listado de todas las tareas pendientes.')
    .command('actualizar', 'Actualiza el estado de una tarea por hacer.', condicionesActualizar)
    .command('borrar', 'Borran las tareas con la descripcion recibida.', descripcion)
    .help()
    .argv;


module.exports = {
    argv
}