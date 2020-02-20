import axios from 'axios'

const base_url = 'https://jsonplaceholder.typicode.com/'

const instance = axios.create({
    base_url
})

export default instance