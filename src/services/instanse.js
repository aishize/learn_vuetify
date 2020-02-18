import axios from 'axios'

let BASE_URL = apiCreateUrl

 export const instance = axios.create({
    BASE_URL
})