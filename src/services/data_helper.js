const API_KEY = "8025a16eff45bba3f9f1156f91bb1190"

const windDeg = deg => {
    if (0 < deg && deg < 45) {
        return 'Северо-Восточный'
    } else
        if (45 < deg && deg < 90) {
            return 'Восточный'
        } else
            if (90 < deg && deg < 135) {
                return 'Юго-Восточный'
            } else
                if (135 < deg && deg < 180) {
                    return 'Южный'
                } else
                    if (180 < deg && deg < 225) {
                        return 'Юго-Западный'
                    } else
                        if (225 < deg && deg < 270) {
                            return 'Западный'
                        }
                        else { return 'Северо-Западный' }
}

const toNormalTime = timestamp => {
    let options = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    };
    return new Date(timestamp * 1000).toLocaleString("ru", options);
};

const parseJSON = weatherData => {
    return {
        'город': weatherData.name,
        'страна': weatherData.sys.country,
        'температура': Math.round(Number(weatherData.main.temp) - 273) + '°C',
        'ощущается': Math.round(Number(weatherData.main.feels_like) - 273) + '°C',
        'рассвет': toNormalTime(weatherData.sys.sunrise),
        'закат': toNormalTime(weatherData.sys.sunset),
        'влажность': weatherData.main.humidity,
        'давление': weatherData.main.pressure + ' hPa',
        'скорость ветра': weatherData.wind.speed + ' mps',
        'направление ветра': windDeg(weatherData.wind.deg),
        'облака': weatherData.weather[0].description
    };
}
const day = timestamp => {
    return new Date(timestamp).getDate()
}
const average = array => {
   array.reduce((prev,current) => {
       return {
           temp: prev.main.temp + current.main.temp,
           pressure: prev.main.pressure + current.main.pressue
       }
   },{})
}

const parseList = list => {
    let truth = []
    let days = list
            .map(item => day(item.dt_txt))
            .reduce((unique,item) => unique.includes(item) ? unique : [...unique, item], [])
    for (let i = 0; i< 5; i++){
        truth.push(
            list.filter(item => day(item.dt_txt) == days[i])
        )
    }
    // return truth.map(item => average(item))
    return truth
}



export { parseJSON, API_KEY, parseList }