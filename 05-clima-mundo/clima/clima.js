const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=c2e8dc03252e5da16f815faa7de4ba52&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima
}