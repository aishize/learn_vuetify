// import router from '@/router/index'
import * as firebase from "firebase/app";

export default {
    signup: async ({commit}, {email, password}) => {
       await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => console.log(res))
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
    }
}