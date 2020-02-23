<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-card flat class="grey lighten-4 ma-5" v-for="(user,i) in getAllUsers[0]" :key="i">
      <v-row :class="`pa-3 project`">
        <v-col xs="12" md="5">
          <div class="caption grey--text">name</div>
          <div>{{user.name}}</div>
        </v-col>
        <v-col xs="12" md="5">
          <div class="caption grey--text">email</div>
          <div>{{user.email}}</div>
        </v-col>
        <v-col xs="6" sm="4" md="2">
          <div class="caption grey--text">role</div>
          <div>{{user.role}}</div>
        </v-col>
        <v-col xs="6" sm="4" md="2">
          <div class="caption grey--text">avatar</div>
          <div>{{user.avatar}}</div>
        </v-col>
      </v-row>
    </v-card>
    <v-row>
      <v-col>
        <v-tooltip top>
          <template #activator="{on}">
            <v-btn fab color="red" class="addProject" v-on="on" @click="test">
              <v-icon class="white--text">mdi-pencil</v-icon>
            </v-btn>
          </template>
          <span>add new project</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import { mapGetters } from 'vuex';

const test = async () => {};

export default {
  computed: mapGetters(['getAllUsers']),
  methods: {
    deleteHandler(){},
    statusHandler(){},
    async createUser() {
      let req = await firebase.database().ref('users').push(this.userId.userInfo)
      await firebase.database().ref(`users/${req.key}/id`).set(req.key)
    },
    async createProject() {
      let req = await firebase.database().ref('users').child(`${this.userId.userInfo.id}/projects`).push(this.userId.projects.projectId)
      await firebase.database().ref(`users/${this.userId.userInfo.id}/projects/${req.key}/id`).set(req.key)
    },
    async getData() {
      let res = await firebase
        .database()
        .ref(`/users`)
        .once("value");
      let response = await res.val();
      console.log(response);
    },
    async postData() {
      let req = await firebase
        .database()
        .ref("/users")
        .push(this.user.userdata);
      this.user.id = await req.key;
    },
    async removeUser() {
      await firebase
        .database()
        .ref(`/users/${this.user.id}`)
        .remove();
    },
    test(){
      console.log(this.getAllUsers)
    }
  }
};
</script>