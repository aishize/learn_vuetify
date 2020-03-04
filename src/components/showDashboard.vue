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
    <v-row  v-if="!isLoaded" >
      <v-col class="d-flex justify-center">
        <v-progress-circular :size="70" :width="7" color="purple" indeterminate></v-progress-circular>
      </v-col>
    </v-row>
    <div v-else>
      <v-card flat class="mb-5" v-for="(project,index) in getProjectsBoot" :key="index">
        <v-row :class="`project ${project.status} grey lighten-4 py-6`">
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
                @click:close="deleteHandler({id: project.id, userID: project.ownerID})"
                @click="statusHandler({id: project.id, userID: project.ownerID,index})"
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
    </div>
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
      statuses: ["ongoing", "complete", "overdue"],
      sortByVal: 'title',
      loading: true
    };
  },
  computed: {
    ...mapGetters(['getProjectsBoot']),
    isLoaded() {
      return this.$store.getters.isLoadedProjects;
    }
  },
  methods: {
    ...mapActions(["deleteProject", "changeStatus"]),
    sortBy(prop) {
      
      if (prop){
        this.sortByVal = prop
      }
       this.getProjectsBoot.sort((a, b) => {
        return a[this.sortByVal] < b[this.sortByVal] ? -1 : 1;
      });
    },
    deleteHandler(payload) {
      let choice = confirm("delete this project?");
      choice ? this.deleteProject(payload) : null;
      
    },
    statusHandler(data) {
      let validStatuses = this.statuses.filter(
        status => status !== this.getProjectsBoot[data.index].status
      );
      let moveStatus = this.statuses.shift();
      this.statuses.push(moveStatus);
      let payload = {
        id: data.id,
        userID: data.userID,
        status: validStatuses[0]
      };
      this.changeStatus(payload);
    }
  },
    watch: {
        getProjectsBoot(prev,current){
          if (prev !== current) {
            this.sortBy()
          }
        }
    }
};
</script>
<style>
.project.complete.grey.lighten-4 {
  border-left: 4px solid #3cd1c2 !important;
}
.project.ongoing.grey.lighten-4 {
  border-left: 4px solid orange !important;
}
.project.overdue.grey.lighten-4 {
  border-left: 4px solid tomato !important;
}

.addProject {
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>
