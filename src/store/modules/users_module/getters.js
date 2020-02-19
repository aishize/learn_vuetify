export default {
    allTeam(state){
        return state.team
    },
    showMembers(state){
        return state.team.map(person => person.name)
    }
}