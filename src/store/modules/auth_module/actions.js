// import router from '@/router/index'
import * as firebase from "firebase/app";
import router from "../../../router";

export default {
    signup: async ({commit}, {email, password}) => {
       await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
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
    signin: async ({commit}, {email, password}) => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
             .then(res => {
                 console.log(res)
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

         commit('SIGN_IN',{uid, token})
     },
     logout: ({commit}) => {
         localStorage.removeItem('token')
         localStorage.removeItem('userId')
         commit('LOGOUT')
         router.push('/')
     }
}