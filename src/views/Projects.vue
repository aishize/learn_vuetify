<template>
  <div class="projects ma-5">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5 col-lg-8 col-md-6 col-sm-6">
      <v-row justify="center">
      <v-row>
        <v-col cols="8" sm="4">
         <v-select
          v-model="selectPersons"
          :items="persons"
          label="Select"
          multiple
          chips
          hint="Whose projects do you want to see?"
          persistent-hint
        ></v-select>
      </v-col>
      </v-row>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="subheading font-weight-bold ">{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div >due by <b>{{project.due}}</b></div>
            <div class="grey--text">status: <b>{{project.status}}</b></div>
            <p class="subheading font-weight-bold grey--text">info: </p>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data() {
     return {
      selectPersons: [],
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
          due: 'July 01, 2020',
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aut adipisci porro."
        },
        {
          title: "fuck Scorpion",
          person: "SubZero",
          due: 'May 25, 1997',
          status: "overdue",
          content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, animi?"
        },
        {
          title: "play fortnite",
          person: "Dear Wife",
          due: 'February 15, 2020',
          status: "complete",
          content:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur."
        }
      ]
    };
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
           return this.selectPersons.includes(project.person)
      })
     },
     persons(){
       return this.projects.map(project => project.person)
     }
  }
}
</script>
<style scoped>
</style>

