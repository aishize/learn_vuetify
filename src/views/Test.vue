<template>
  <v-container class="my-5 col-lg-8 col-md-6 col-sm-6">
    <v-row >
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header class="subheading font-weight-bold">{{project.title}}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <div>
              due by
              <b>{{project.due}}</b>
            </div>
            <div class="grey--text">
              status:
              <b>{{project.status}}</b>
            </div>
            <p class="subheading font-weight-bold grey--text">info:</p>
            <div>{{project.content}}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: mapGetters(["allProjects"])
};
</script>