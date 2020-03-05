export default {
    'SIGN_IN': (state, {uid, token}) => {
        state.userId = uid
        state.tokenId = token
    },
    'LOGOUT': (state) => {
        state.userId = null
        state.tokenId = null
    }
}