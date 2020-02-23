import * as firebase from "firebase/app";

export default {
    state: {
        users: []
    },
    mutations: {
        loadUsers: (state,data) => {
            state.users = [...state.users,data]
        }
    },
    actions: {
        loadUsers: async ({ commit }) => {
            let res = await firebase
                .database()
                .ref(`/users`)
                .once("value");
            let users = await res.val();
            users = Object.values(users)
            console.log(users)
            commit('loadUsers',users)
        }
    },
    getters: {
        getAllUsers(state) {
            return state.users
        }
    }
}