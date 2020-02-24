export default {
    // createPerson: (state, data) => {
    //     state.team = [...state.team, data]
    // },
    primaryBoot: (state,data) => {
        state.team = {...data}
        // console.log('mutations: ',state.team)
    },
    projectsBoot : (state,payload) => {
        state.projects = payload
        // console.log('state projects: ', state.projects)
    }
}