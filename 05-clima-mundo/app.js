const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Direccion de la ciudad'
    }
}).argv;


// lugar.getLugarLatLong(argv.direccion).then(

// );

// clima.getClima(43.43, 42.32)
//     .then(console.log)
//     .catch(console.log);

const getInfo = async(direccion) => {

    try {
        const respLugar = await lugar.getLugarLatLong(direccion);
        const temp = clima.getClima(respLugar.lat, respLugar.lon);
        console.log(`el clima de ${direccion} es de ${resp} °C`);
    } catch (err) {
        console.log(`No se pudo determinar el clima de ${direccion}`);
    }
}

getInfo(argv.direccion);