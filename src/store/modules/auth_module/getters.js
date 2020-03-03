export default {
    isAuthenticated: (state) => {
        return state.tokenId !== null
    }
}