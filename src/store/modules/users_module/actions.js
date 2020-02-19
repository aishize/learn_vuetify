export default {
     createPerson: ({commit}, data) => {
         commit('createPerson',{name: data.name, role: data.role, avatar: data.avatar})
     }
}