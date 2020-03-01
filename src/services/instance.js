import axios from 'axios'

const jsonplaceholder = 'https://jsonplaceholder.typicode.com'

const getWeather = 'https://api.openweathermap.org/data/2.5'

const jphInstance = axios.create({
    baseURL: jsonplaceholder
})
const weather = axios.create({
    baseURL: getWeather
})


export {jphInstance, weather}