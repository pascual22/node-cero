const argv = require('./config/yargs').argv;

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite).then((result) => {
            console.log(result);
        }).catch((err) => {
            console.log(`error al crear el archivo ${err}`);
        });
        break;

    default:
        console.log('comando no reconocido');
        break;
}