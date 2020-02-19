<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-row>
      <v-col>
        <h1>FIREBASE</h1>
      </v-col>

      <v-col>
        <v-btn @click="setData">ТЫК</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";

const getData = async () => {
  const info = await firebase
    .database()
    .ref(`/projects/project_1`)
    console.log(info.database.app)
};
export default {
  methods: {
    pressF() {
      getData();
    },
    async setData(){
      let res = await firebase.database().ref(`/users/user`)
      let response = await res.once('value')
      console.log(response.val())
    }
  }
};
</script>