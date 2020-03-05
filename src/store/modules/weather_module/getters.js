export default {
    getCities: state => {
        if (state.myCities) {
            return state.myCities
        } else {
            return false
        }
    },
    getForecast: state => {
        if (state.forecast) {
            return state.forecast
        } else {
            return false
        }
    }
}