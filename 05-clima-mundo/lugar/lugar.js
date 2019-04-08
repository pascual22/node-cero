const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: { 'X-RapidAPI-Key': '981ed2956cmshed74da833dfb7a0p14c93ejsna250b616c9b7' }
    });

    const resp = await instance.get();

    if (resp.data.Results.length === 0) {
        throw new Error(`No se encontro la direccion ${dir} `);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLong
}