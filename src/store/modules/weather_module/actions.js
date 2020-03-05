import { weather } from '@/services/instance'
import { parseJSON, API_KEY, parseList } from '@/services/data_helper'
import * as firebase from "firebase/app";

export default {
    deleteCity: ({ commit }, payload) => {
        commit('DELETE_CITY', payload)
    },
    addCityByName: async ({ commit, dispatch }, city) => {
        try {
            let weatherData = await weather
                .get(
                    `/weather?q=${city}&appid=${API_KEY}`
                )
                .then(res => res.data)
            const data = await parseJSON(weatherData)
            dispatch('getForecast', data['город'])
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
            const data = await parseJSON(weatherData)
            dispatch('getForecast', data['город'])
            commit('ADD_CITY', data)
        } catch (e) {
            console.warn(e)
        }
    },
    getForecast: async ({ commit }, city) => {
            await weather
                .get(
                    `/forecast?q=${city}&appid=${API_KEY}`
                )
                .then(res => parseList(res.data.list))
                .then(forecast => commit('ADD_FORECAST',forecast))
                .catch(e => console.warn(e))
    },
    loadData: async ({ commit }, weather) => {
        try {
            let res = await firebase
                .database()
                .ref(`/weather`)
                .once("value")
            let weather = await res.val()
            console.log(weather)
            commit('LOAD_DATA', weather)
        } catch (e) {
            console.warn('code: '+e.code+'; ', e.message)
        }
    },
    saveData: async ({ commit }, weather) => {
        try {
            await firebase.database().ref('/weather').set(weather)
        } catch (e) {
            console.warn(e.message)
         }
    }
}