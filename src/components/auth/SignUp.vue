<template>
    <v-row justify="center" class='mt-5'>
        <v-col cols="10">
            <v-card :elevation="12"> 
            <v-card-title>
                <span class="headline">Sign Up!</span>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-row md="6" sm="8" xs="12">
                        <v-col md="12" sm="12" xs="12" class="my-n4">
                            <v-text-field label="*Email" v-model="user.email" :rules="emailRules" required></v-text-field>
                        </v-col>
                        <v-col md="12" sm="12" xs="12" class="my-n4">
                            <v-text-field label="*Password" type="password" required v-model="user.password" :rules="passRules"></v-text-field>
                        </v-col>
                        <v-col md="12" sm="12" xs="12" class="my-n4">
                            <v-text-field label="*confirm password" type="password" required v-model="user.confirmPassword" :rules="repeatPassRules"></v-text-field>
                        </v-col>
                        <v-col md="6" sm="6" xs="6">
                            <v-text-field label="*Age" v-model="user.age" required></v-text-field>
                        </v-col>
                        <v-col md="6" sm="6" xs="6">
                            <v-select label="select your country" :items="countries" v-model="user.country">
                            </v-select>
                        </v-col>
                    </v-row>
                </v-container>
                <small>*indicates required field</small>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="success"  @click.prevent="signup">SignUp</v-btn>
                <v-btn color="error"  :to="'/'">Cancel</v-btn>
            </v-card-actions>
        </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    data () {
    return {
      user: {
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        country: ''
      },
      countries: ['USA', 'Canada', 'Ukraine', 'Russia', 'Greenland'],
      valid: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      passRules: [
        v => !!v || 'Password is required',
        v => v.length >= 6 || 'Password must be more than 6 characters'
      ],
      repeatPassRules: [
        v => !!v || 'confirm password!',
        v => v === this.user.password || "passwords don't match"
      ]
    }
  },
  methods: {
    signup () {
      const payload = {
        email: this.user.email,
        age: this.user.age,
        password: this.user.password,
        country: this.user.country
      }
      this.$store.dispatch('signup',{email: payload.email, password: payload.password})
    }
  }
}
</script>