export default {
    // createPerson: (state, data) => {
    //     state.team = [...state.team, data]
    // },
    primaryBoot: (state,data) => {
        state.team = {...data}
        console.log(state.team)
    }
}