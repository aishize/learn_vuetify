export default {
    createProject: (state, data) => {
        state.projects.unshift(data)
    },
    deleteProject: (state, projectIndex) => {
        state.projects.splice(projectIndex,1)
    }
}