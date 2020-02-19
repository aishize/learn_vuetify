export default {
    createProject: ({commit}, data) => {
        commit('createProject',{
            title: data.title, 
            person: data.person, 
            due: data.due,
            status: data.status,
            content: data.content       
        })
    },
    deleteProject({commit},projectIndex){
        commit('deleteProject',projectIndex)
    }
}