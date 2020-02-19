export default {
    createProject: (state, data) => {
        state.projects.unshift(data)
    }
}