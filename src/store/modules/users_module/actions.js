import * as firebase from "firebase/app";

export default {
    createPerson: async ({ dispatch }, user) => {
        try {
            let req = await firebase.database().ref('users').push(user)
            await firebase.database().ref(`users/${req.key}/id`).set(req.key)
            dispatch('primaryBoot')
        } catch (e) {
            console.warn(e.message)
         }
    },
    createProject: async ({ dispatch }, payload) => {
        try {
            let req = await firebase.database().ref('users').child(`${payload.userID}/projects`).push(payload.data)
            await firebase.database().ref(`users/${payload.userID}/projects/${req.key}/id`).set(req.key)
            dispatch('primaryBoot')
        } catch(e) {
            console.warn(e.message)
        }
        
    },
    deleteProject: async ({dispatch}, payload) => {
          try {
            await firebase.database().ref(`users/${payload.userID}/projects/${payload.id}`).remove()
            dispatch('primaryBoot')
          }catch(e){
              console.warn(e.message)
          }
    },
    changeStatus: async ({dispatch}, payload) => {
          try{ 
            await firebase.database().ref(`users/${payload.userID}/projects/${payload.id}/status`).set(payload.status)
            dispatch('primaryBoot')
          }catch(e){
              console.warn(e.message)
          }
    },
    primaryBoot: async ({ commit }) => {
        let projects = []
        try {
            let res = await firebase
                .database()
                .ref(`/users`)
                .once("value")
            let users = res.val()
            try {
                // console.log('in actions: ',users)
                for (let [k,v] of Object.entries(users)){
                    for (let [j,i] of Object.entries(users[k])){
                        if ( j == 'projects'){
                            projects.push(Object.values(i))
                        }
                    }
                }
                commit('projectsBoot', projects.flat())
            } catch (e) {
                console.warn(e.message)
            }
            commit('primaryBoot', users)
            // let users = await res.val();
            // users = Object.values(users)
            // console.log(users)
            // commit('primaryBoot', users)
        } catch (e) { }
    }
}