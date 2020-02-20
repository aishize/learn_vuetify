<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-row v-if="!posts">
      <v-col>
        <v-btn @click="getData('users')">get Users</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="getData('posts')">get Posts</v-btn>
      </v-col>
    </v-row>
    <!-- ////////////////V-ELSE////////////////// -->
    <div v-else>
      <v-row v-if="errored">
        <v-col>error</v-col>
      </v-row>
      <div v-else>
        <v-row v-if="loading">
          <v-col class="d-flex justify-center">
            <p>...Loading</p>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-text-field placeholder="search by user id" v-model="search" :counter="3">
            <v-btn color="white" text depressed slot="append" @click="getPostByUserId">
              <v-icon color="red">mdi-playstation</v-icon>
            </v-btn>
          </v-text-field>
          <v-row v-if="posts.length < 1">
            <v-col cols="12"></v-col>
            <v-col cols="12">
              <p>no posts :(</p>
            </v-col>
          </v-row>
          <v-row v-else>
            <v-card v-for="(post,i) in posts" :key="i" class="mb-4 pa-2">
              <v-list-item-content>
                <v-row>
                  <v-col cols="12">
                    <div class="mb-2 grey--text lighten-1">UserId: {{post.userId}}</div>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <div class="mb-4 grey--text lighten-1">{{post.title}}</div>
                  </v-col>
                </v-row>
                <div class="mb-4 grey--text lighten-2">{{post.body}}</div>
              </v-list-item-content>
            </v-card>
          </v-row>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
import instance from "../services/instance";

const showMe = async () => {
  await instance.get("/users").then(res => console.log(res));
};

export default {
  data() {
    return {
      posts: null,
      users: null,
      loading: true,
      errored: false,
      search: ""
    };
  },
  methods: {
    async getData(param) {
      if (param == "posts") {
        await instance
          .get(`/${param}`)
          .then(response => (this.posts = response.data))
          .catch(error => {
            console.warn(error.message);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      } else if (param == "users") {
        await instance
          .get(`/${param}`)
          .then(response => (this.users = response.data))
          .catch(error => {
            console.warn(error.message);
            this.errored = true;
          })
          .finally(() => (this.loading = false));
      }
    },
    async getPostByUserId() {
      this.loading = true;
      await instance
        .get(`/posts?userId=${this.search}`)
        .then(response => (this.posts = response.data))
        .catch(error => {
          console.warn(error.message);
          this.errored = true;
        })
        .finally(() => {
          this.loading = false;
        });
    }
  },
  mounted() {
    showMe();
  }
};
</script>