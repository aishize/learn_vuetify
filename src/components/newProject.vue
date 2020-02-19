<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-row class="grey lighten-4 text-center d-flex justify-center">
      <v-col md="12" sm="12" lg="6">
        <v-form ref="form" v-model="valid">
          <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="items" label="Solo field" solo></v-select>
          </v-col>

          <v-text-field v-model="title" :rules="titleRules" label="Project Title" required></v-text-field>

          <v-col cols="12" md="12">
            <v-textarea
              solo
              name="input-7-4"
              v-model="content"
              :rules="infoRules"
              label="project info"
            ></v-textarea>
          </v-col>
          <v-card flat>
            <v-row>
              <v-col class="text-center" cols="6">Date:</v-col>
              <v-col cols="6">
                <input type="date" color="grey lighten-4" v-model="due" label="Project Date" />
              </v-col>
            </v-row>
          </v-card>

          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
          ></v-checkbox>

          <v-row>
            <v-col cols="4">
              <v-btn :disabled="!valid" color="success" class="mr-4">add</v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn color="warning" class="mr-4" @click="reset">reset</v-btn>
            </v-col>
            <v-col cols="4">
              <v-btn color="error" :to="'/dashboard'">cancel</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      project: {
        person: "",
        title: "",
        content: "",
        status: "",
        due: ""
      },
      valid: true,
      title: "",
      titleRules: [v => !!v || "Title is required"],
      content: "",
      infoRules: [v => !!v || "Project info is required"],
      due: "",
      checkbox: false
    };
  },
  computed: mapGetters(['allProjects']),
  methods: {
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>