const opciones = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('crear', 'Crea el objeto', {
        descripcion: {
            demand: true,
            alias: 'd'
        }
    })
    .command('actualizar', 'actualiza el objeto', {
        descripcion: {
            demand: true,
            alias: 'd'
        },
        completado: {
            alias: 'c',
            default: true
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}