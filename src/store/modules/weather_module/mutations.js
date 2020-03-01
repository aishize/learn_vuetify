export default {
    'DELETE_CITY': (state, payload) => {
        state.myCities = state.myCities.filter((city, index) => index !== payload)
    },
    'ADD_CITY': (state, city) => {
        state.myCities = [...state.myCities, city]
        console.log(state.myCities)
    }
}