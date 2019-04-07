const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crea la tarea', {
        descripcion
    })
    .command('actualizar', 'actualiza la tarea', {
        descripcion,
        completado
    }).command('borrar', 'elimina la tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}