<template>
  <v-container class="my-5 col-lg-8 col-md-8 col-sm-6">
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

    <v-card flat class="grey lighten-4 ma-5" v-for="(project,i) in allProjects" :key="i">
      <v-row :class="`pa-3 project ${project.status}`">
        <v-col xs="12" md="5">
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
        <v-col xs="6" sm="4" md="3">
          <div style="display: flex; justify-content: flex-end">
            <v-chip
              small
              :color="`${chipsColors[project.status]}`"
              class="my-2 white--text caption"
              close
              close-icon="mdi-delete"
              @click:close="deleteHandler(i)"
              @click="statusHandler(i)"
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
    <v-row>
      <v-col>
        <v-tooltip top>
          <template #activator="{on}">
            <v-btn fab color="red" class="addProject" v-on="on" :to="'/dashboard/newproject'">
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
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      chipsColors: {
        complete: "#3cd1c2",
        ongoing: "orange",
        overdue: "#FF6347"
      },
      statuses: ['ongoing','complete','overdue']
    };
  },
  computed: mapGetters(["allProjects"]),
  methods: {
    ...mapActions(["deleteProject","changeStatus"]),
    sortBy(prop) {
      this.allProjects.sort((a, b) =>
        a[prop].toLowerCase() < b[prop].toLowerCase() ? -1 : 1
      );
    },
    deleteHandler(index) {
      let choice = confirm("delete this project?");
      choice ? this.deleteProject(index) : null;
    },
    statusHandler(index){
      let validStatuses = this.statuses.filter(status => status !== this.allProjects[index].status)
      let moveStatus = this.statuses.shift()
      this.statuses.push(moveStatus)
      let data = {
        index,
        status: validStatuses[0]
      }
      this.changeStatus(data)
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

.addProject {
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>
