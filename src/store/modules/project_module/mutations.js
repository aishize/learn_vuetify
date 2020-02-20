export default {
    createProject: (state, data) => {
        state.projects = [data, ...state.projects]
    },
    deleteProject: (state, projectIndex) => {
        state.projects = state.projects.filter((item,index) => index != projectIndex)
    },
    changeStatus: (state, data) => {
        state.projects = state.projects.map((item, index) => {
            if (index == data.index) {
                item.status = data.status
            }
            return item
        })
    }
}