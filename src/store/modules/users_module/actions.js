export default {
     createPerson: ({commit}, data) => {
         console.log(data)
         commit('createPerson',{name: data.name, role: data.role, avatar: data.avatar})
     }
}