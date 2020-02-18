<template>
  <v-container class="my-5">
    <v-row>
      <v-col xs="12" sm="6" md="4" lg="4" v-for="person in allTeam" :key="person.name">
        <v-card class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100">
              <v-img :src="require(`@/assets/${person.avatar}`)" :alt="person.avatar" />
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{person.role}}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="grey">
              <v-icon small left>mdi-message</v-icon>
              <span>message</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-tooltip top>
          <template #activator="{on}">
            <v-btn :to="'/team/addperson'" fab color="red" class="addProject" v-on="on">
              <v-icon class="white--text">mdi-account-plus</v-icon>
            </v-btn>
          </template>
          <span>new Person</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: mapGetters(["allTeam"])
};
</script>
<style scoped>
.addProject {
  position: fixed;
  bottom: 40px;
  right: 40px;
}
</style>
