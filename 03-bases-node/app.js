const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help()
    .argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(`error al crear el archivo ${err}`);
        });
        break;

    default:
        console.log('comando no reconocido');
        break;
}


// let base = '3';

// let param = argv[2];
// let base = param.split('=')[1];