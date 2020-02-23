import * as firebase from "firebase/app";

export default {
    createPerson: async ({ dispatch }, user) => {
        try {
            let req = await firebase.database().ref('users').push(user)
            await firebase.database().ref(`users/${req.key}/id`).set(req.key)
            dispatch('primaryBoot')
        } catch (e) { }
    },
    createProject: async ({ dispatch }, payload) => {
        try {
            let req = await firebase.database().ref('users').child(`${payload.userId}/projects`).push(payload.data)
            await firebase.database().ref(`users/${payload.userId}/projects/${req.key}/id`).set(req.key)
        } catch(e) {
            console.warn(e.message)
        }
        dispatch('primaryBoot')
    },
    primaryBoot: async ({ commit }) => {
        try {
            let res = await firebase
                .database()
                .ref(`/users`)
                .once("value")
            let users = res.val()
            try {
                console.log(Object.keys(users))
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