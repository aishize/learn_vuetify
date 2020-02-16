<template>
  <div class="team">
    <h3 class="subheading grey--text">Team</h3>
    <v-container class="my-5">
      <v-row>
        <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
                <v-avatar size="100">
                    <v-img :src="require(`./images/${person.avatar}`)" :alt="person.avatar" />
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
        <v-card class="mx-auto" max-width="400">
          <v-img
            class="white--text align-end"
            height="200px"
            :src='require("./images/papich.png")'
          >
            <v-card-title>Top 10 Worldwide streamers</v-card-title>
          </v-img>

          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>Venceslav Pupecheskiy</div>

            <div>Assket proGamer culturist</div>
          </v-card-text>

          <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>

            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: [
        { name: "Aishize", role: "deep dark fantasies", avatar: 'account.png' },
        { name: "SubZero", role: "love sweet ass", avatar: 'subzero.jpg' },
        { name: "Dear Wife", role: "play fortnite all time", avatar: 'anime.jpg' },
        { name: "Grandfather V@ler_4_ik", role: "Kill all the Rada members", avatar: 'obema.jpg' },
        { name: "Anatoly", role: "AAAAAnataloy anatoly", avatar: 'mops.jpg' }
      ]
    };
  }
};
</script>
<style scoped>
</style>
