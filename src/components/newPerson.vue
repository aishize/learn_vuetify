<template>
  <v-container class="my-5">
    <h2 class="offset-2 grey--text lighten-2">new Person</h2>
    <v-row align="center" class="offset-3 col-lg-8">
      <v-form ref="form" v-model="valid">
        <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

        <v-text-field v-model="role" :rules="roleRules" label="Role" required></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Create</v-btn>

        <v-btn color="warning" class="mr-4" @click="reset">Reset</v-btn>

        <v-btn :to="'/team'" color="error" class="mr-4 " @click="cancelCreatePerson">Cancel</v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    role: "",
    roleRules: [
      v => !!v || "Role is required",
    ],
    checkbox: false,
  }),

  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    cancelCreatePerson(){
        this.$emit('cancelcreateperson')
    }
  }
};
</script>