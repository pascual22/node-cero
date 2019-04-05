const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);

        break;

    case 'listar':
        console.log('listar tareas por hacer');

        break;

    case 'actualizar':
        console.log('actualiza tarea por hacer');

        break;
    default:
        console.log('comando no reconocido');
        break;
}