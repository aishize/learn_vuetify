export default {
    'DELETE_CITY': (state, payload) => {
        state.myCities = state.myCities.filter((city, index) => index !== payload)
        state.forecast = state.forecast.filter((city, index) => index !== payload)
    },
    'ADD_CITY': (state, city) => {
        state.myCities = [...state.myCities, city]
        console.log(state.myCities)
    },
    'ADD_FORECAST': (state, forecast) => {
        state.forecast = [...state.forecast, forecast]
        console.log(state.forecast)
    },
    'LOAD_DATA': (state,{cities, forecast}) => {
        console.log('cities: ', cities)
        console.log('forecast: ', forecast)
        state.myCities = cities
        state.forecast = forecast
    }
}