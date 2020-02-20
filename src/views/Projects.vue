<template>
  <div class="projects ma-5">
    <h1 class="subheading grey--text">Projects</h1>
    <v-container class="my-5 col-lg-8 col-md-6 col-sm-6">
      <v-row justify="center">
      <v-row>
        <v-col cols="12" sm="8" md="8">
         <v-select
          v-model="selectPersons"
          :items="showPersons"
          label="Select"
          multiple
          solo
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
      selectPersons: ['Aishize']
    };
  },
  computed: {
    ...mapGetters(['showPersons','allProjects']),
    myProjects(){
      return this.allProjects.filter(project => {
           return this.selectPersons.includes(project.person)
      })
     }
  }
}
</script>
<style scoped>
</style>

