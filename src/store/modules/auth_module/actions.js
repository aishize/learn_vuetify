// import router from '@/router/index'
import * as firebase from "firebase/app";
import router from "../../../router";

export default {
    setLogoutTimer: ({dispatch}, expirationTime) => {
        setTimeout(() => {
            dispatch('logout')
        }, expirationTime * 1000)
    },
    signup: async ({commit, dispatch}, {email, password}) => {
       await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                localStorage.setItem('token', res.user.refreshToken)
                localStorage.setItem('userId', res.user.uid)
                localStorage.setItem('expiresIn', Number(res.user.metadata['b']))
                commit('SIGN_IN',{uid: res.user.uid, token: res.user.refreshToken})
                router.replace('/dashboard')
            })
            .catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
    },
    signin: async ({commit, dispatch}, {email, password}) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
             .then(res => {
                 const date = new Date().getTime()
                 console.log(res.user, new Date(date))
                 localStorage.setItem('token', res.user.refreshToken)
                 localStorage.setItem('userId', res.user.uid)
                 commit('SIGN_IN',{uid: res.user.uid, token: res.user.refreshToken})
                 router.replace('/dashboard')
             })
             .catch(function(error) {
             var errorCode = error.code;
             var errorMessage = error.message;
             if (errorCode == 'auth/weak-password') {
                 alert('The password is too weak.');
             } else {
                 alert(errorMessage);
             }
             console.log(error);
             });
     },
     tryAutoLogin: ({commit}) => {
         const uid = localStorage.getItem('userId')
         const token = localStorage.getItem('token')
         if (uid!== null && token!==null) {
            commit('SIGN_IN',{uid, token})
            router.replace('/dashboard')
         } else {
             return null
         }
     },
     logout: ({commit}) => {
         localStorage.removeItem('token')
         localStorage.removeItem('userId')
         commit('LOGOUT')
         router.replace('/login')
     }
}