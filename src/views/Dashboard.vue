<template>
  <div class="dashboard">
    <h3 class="subheading grey--text">Dashboard</h3>
    <v-container class="my-5 col-lg-8 col-md-6 col-sm-6">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon>mdi-folder</v-icon>
              <span class="caption text-lowercase"></span>
            </v-btn>
          </template>
          <span>sort by project Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon>mdi-account</v-icon>
              <span class="caption text-lowercase"></span>
            </v-btn>
          </template>
          <span>sort by Person</span>
        </v-tooltip>
      </v-row>

      <v-card flat class="grey lighten-4 ma-5" v-for="project in projects" :key="project.title">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Title</div>
            <div>{{project.title}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Due By</div>
            <div>{{project.due}}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div style="display: flex; justify-content: flex-end">
              <v-chip
                small
                :color="`${chipsColors[project.status]}`"
                class="my-2 white--text caption"
              >
                <v-avatar left>
                  <v-icon small>mdi-source-fork</v-icon>
                </v-avatar>
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chipsColors: {
        complete: "#3cd1c2",
        ongoing: "orange",
        overdue: "#FF6347"
      },
      projects: [
        {
          title: "writing this shit",
          person: "Aishize",
          due: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, expedita?"
        },
        {
          title: "dancing on the Moon",
          person: "Rainbow Dash",
          due: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut adipisci porro."
        },
        {
          title: "fuck Scorpion",
          person: "SubZero",
          due: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          status: "overdue",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, animi?"
        },
        {
          title: "play fortnite",
          person: "Dear Wife",
          due: new Date().toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric"
          }),
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur."
        }
      ]
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) =>
        a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1
      );
    }
  }
};
</script>
<style scoped>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
</style>
