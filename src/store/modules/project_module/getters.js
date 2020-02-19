export default {
    allProjects(state){
        return state.projects
     },
     showPersons(state){
         return state.projects.map(project => project.person)
     }
}