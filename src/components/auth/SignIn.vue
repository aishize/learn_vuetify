<template>
  <v-content>
    <v-form ref="forms">
      <v-card class="mx-auto mb-4" max-width="344" :elevation="12" >
        <v-card-title>Sign In</v-card-title>
        <v-list>
          <v-list-item>
            <v-text-field label="email" v-model="user.email"></v-text-field>
          </v-list-item>
          <v-list-item>
            <v-text-field label="password" v-model="user.password" type="password"></v-text-field>
          </v-list-item>
        </v-list>
        <v-card-actions>
          <v-row>
            <v-col></v-col>
            <v-col>
              <v-btn color="success" @click="login">sign in</v-btn>
            </v-col>
            <v-col>
              <v-btn color="error" @click="reset">cancel</v-btn>
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-form>
  </v-content>
</template>
<script>
export default {
    data(){
        return {
            user: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        login() {
          if(this.user.email.length&& this.user.password) {
            this.$store.dispatch('signin',{email: this.user.email, password: this.user.password})
          } else {
            alert('enter email and password')
          }
        },
        reset(){
            this.$refs.forms.reset()
        }
    }
}
</script>