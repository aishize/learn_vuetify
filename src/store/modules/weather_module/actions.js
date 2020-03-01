import { weather } from '@/services/instance'
import { parseJSON, API_KEY, parseList } from '@/services/data_helper'


export default {
    deleteCity: ({ commit }, payload) => {
        commit('DELETE_CITY', payload)
    },
    addCityByName: async ({ commit }, city) => {
        try {
            const weatherData = await weather
                .get(
                    `/weather?q=${city}&appid=${API_KEY}`
                )
                .then(res => res.data)
            const data = parseJSON(weatherData)
            commit('ADD_CITY', data)
        } catch (e) {
            if (e.message = 'Request failed with status code 404'){
                alert('такого города не существует, уточните название и повторите попытку')
            } else {
                console.warn(e.message)
            }
        }
    },
    addCityByCoord: async ({ commit, dispatch }, coords) => {
        try {
            let weatherData = await weather
                .get(
                    `/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${API_KEY}`
                )
                .then(res => res.data);
            const data = parseJSON(weatherData)
            commit('ADD_CITY', data)
            dispatch('getForecast', data['город'])
        } catch (e) {
            console.warn(e)
        }
    },
    getForecast: async ({ commit }, city) => {
        try {
            await weather
                .get(
                    `/forecast?q=${city}&appid=${API_KEY}`
                )
                .then(res => console.log(parseList(res.data.list)))
        }catch(e){
            console.warn(e)
        }
    }
}