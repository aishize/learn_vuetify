const API_KEY = "8025a16eff45bba3f9f1156f91bb1190"

const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

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
const toNormal = (object, payload) => {
let test = {}
    for (let i = 0; i < 5; i++) {
        test = Object.assign(test,{ [`${payload.dates[i]}`]: {
            temp: Math.round(object.temp[i] -273) + '°C',
            feels_like: Math.round(object.feels_like[i] - 273) + '°C',
            temp_min: Math.round(object.temp_min[i] - 273) + '°C',
            temp_max: Math.round(object.temp_max[i] -273) + '°C',
            pressure: object.pressure[i] + ' hPa',
            sea_level: object.sea_level[i],
            grnd_level: object.grnd_level[i],
            humidity: object.humidity[i],
            clouds: payload.clouds[i]
        }})
    }
return test
}
const average = days => {
    return {
        temp: averageSimple(days, 'temp'),
        feels_like: averageSimple(days, 'feels_like'),
        temp_min: averageSimple(days, 'temp_min'),
        temp_max: averageSimple(days, 'temp_max'),
        pressure: averageSimple(days, 'pressure'),
        sea_level: averageSimple(days, 'sea_level'),
        grnd_level: averageSimple(days, 'grnd_level'),
        humidity: averageSimple(days, 'humidity')
    }
}

const averageSimple = (days, key)=> {
    let avgArray = []
    days.forEach(day => {
        const sum = day.map(item => item.main[`${key}`]).reduce((prev, current) => {
            return prev + current
        })
        const avg = sum / day.length
        avgArray = [...avgArray, avg.toFixed(2)]
    })
    return avgArray
}

const parseList = list => {
    let truth = []
    let days = list
        .map(item => day(item.dt_txt))
        .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
    for (let i = 0; i < 5; i++) {
        truth.push(
            list.filter(item => day(item.dt_txt) == days[i])
        )
    }
    let clouds = list.map(item => item.weather[0].description).filter((n,i) => i % 8 == 0)
    let dates = list.map(item => new Date(item.dt_txt)).map(item => item.toLocaleString('en-US', options)).filter((n,i) => i % 8 == 0)
    return {
        data: toNormal(average(truth),{dates, clouds}),
    }
}



export { parseJSON, API_KEY, parseList }