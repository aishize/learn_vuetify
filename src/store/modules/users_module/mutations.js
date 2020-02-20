export default {
    createPerson: (state, data) => {
        state.team = [...state.team, data]
    }
}