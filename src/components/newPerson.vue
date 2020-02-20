<template>
  <v-container class="my-5">
    <h2 class="offset-2 grey--text lighten-2">new Person</h2>
    <v-row align="center" class="offset-3 col-lg-8">
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="user.name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="user.role" :rules="roleRules" label="Role" required></v-text-field>

        <v-row>
          <v-col sm="6" md="6" lg="6" class="d-flex align-center justify-start">
            <v-menu
              v-model="menu"
              :close-on-content-click="true"
              :nudge-left="220"
              transition="scale-transition"
              offset-x
              min-width="80"
            >
              <template v-slot:activator="{ on }">
                <v-btn v-on="on" outlined color="pink lighten-2 d-flex align-center white--text">
                  <span class="mr-2 grey--text">avatar</span>
                  <v-icon right large>mdi-google-photos</v-icon>
                </v-btn>
              </template>

              <div class=" ma-2 ">
                <div v-for="(avatar,i) in 6" :key="i" class="ma-1 avatar">
                  <v-avatar size="50" @click="chooseAvatar(i)">
                    <v-img :src="require(`../assets/avatars/${i}.jpg`)" />
                  </v-avatar>
                </div>
              </div>
            </v-menu>
          </v-col>
          <v-col  md="6" sm="6" lg="6" class="d-flex justify-end">
            <v-avatar size="80">
              <v-img :src="require(`../assets/${user.avatar}`)" />
            </v-avatar>
          </v-col>
        </v-row>
        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
          class="mt-10"
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="pushAndRedirect">Create</v-btn>

        <v-btn color="warning" class="mr-4" @click="reset">Reset</v-btn>

        <v-btn :to="'/team'" color="error" class="mr-4">Cancel</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      menu: false,
      user: {
        name: "",
        role: "",
        avatar: "account.png"
      },
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Name must be less than 10 characters"
      ],
      roleRules: [v => !!v || "Role is required"],
      checkbox: false
    };
  },

  methods: {
    ...mapActions(["createPerson"]),
    reset() {
      this.$refs.form.reset();
    },
    pushAndRedirect() {
      this.createPerson(this.user);
      this.$router.push("/team");
    },
    chooseAvatar(index) {
      this.user.avatar = `avatars/${index}.jpg`;
    }
  }
};
</script>

<style scoped>
.avatar {
  cursor: pointer;
}
</style>