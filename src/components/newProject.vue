<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-row class="grey lighten-4 text-center d-flex justify-center">
      <v-col md="12" sm="12" lg="6">
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col class="d-flex justify-center" cols="12" sm="12" md="7" lg="7">
              <v-select
                label="choose your fighter"
                :items="showMembers.map(item => Object.values(item).toString())"
                solo
                v-model="project.person"
                @change="setUserId"
              ></v-select>
            </v-col>
            <v-spacer></v-spacer>
            <v-col class="d-flex justify-center" cols="12" sm="12" md="4" lg="4">
              <v-select solo label="status" :items="statuses" v-model="project.status"></v-select>
            </v-col>
          </v-row>

          <v-text-field v-model="project.title" :rules="titleRules" label="Project Title" required class="mt-n6"></v-text-field>

          <v-col cols="12" md="12">
            <v-textarea
              solo
              name="input-7-4"
              v-model="project.content"
              :rules="infoRules"
              label="project info"
            ></v-textarea>
          </v-col>
          <v-card flat color="grey lighten-4 mt-n10">
            <v-row class="d-flex justify-start">
              <v-col cols="12" sm="6" md="6">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="project.due"
                        label="project date"
                        prepend-icon="mdi-calendar-month"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="project.due" @input="menu = false"></v-date-picker>
                  </v-menu>
                </v-col>
            </v-row>
          </v-card>
          <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'You must agree to continue!']"
            label="Do you agree?"
            required
            class="my-n3"
          ></v-checkbox>

          <v-row>
            <v-col cols="4">
              <v-btn :disabled="!valid" @click="pushAndRedirect" color="success" class="mr-4">add</v-btn>
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
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      menu: false,
      userId: null,
      project: {
        id: '',
        person: "",
        title: "",
        content: "",
        status: "",
        due: new Date().toISOString().substr(0, 10)
      },
      statuses: ["ongoing", "overdue", "complete"],
      valid: true,
      titleRules: [v => !!v || "Title is required"],
      infoRules: [v => !!v || "Project info is required"],
      checkbox: false
    };
  },
  computed: mapGetters(["showMembers"]),
  methods: {
    setUserId(){
     console.log(this.project.person)
      let id = this.showMembers.filter(item => Object.values(item).toString() == this.project.person)
      this.userId = Object.keys(id[0])[0]
      console.log(this.userId)
    },
    ...mapActions(["createProject"]),
    reset() {
      this.$refs.form.reset();
    },
    pushAndRedirect() {
      this.createProject({data: this.project, userId: this.userId});
      this.$router.push("/dashboard");
    }
  }
};
</script>