<template>
  <v-container>
    <span>
      <h2>weather map</h2>
    </span>
    <v-row justify="center">
      <v-col cols="12">
        <template>
          <v-tabs>
            <v-tab v-for="(item,n) in getCities" :key="n" icon @click="tabAction(true,n)">
              <span>{{item['город']}}</span>
              <template>
                <v-icon right @click="deleteCity(n)">mdi-close-circle-outline</v-icon>
              </template>
            </v-tab>
            <v-tooltip top>
              <template v-slot:activator="{ on }">
                <v-tab icon v-on="on" @click="tabAction(false)">
                  <v-icon>mdi-map-marker-plus</v-icon>
                </v-tab>
              </template>
              <span>new location</span>
            </v-tooltip>
          </v-tabs>
        </template>
        <div v-if="search">
          <showWeather :city="Number(currentCity)" />
        </div>
        <div v-else>
          <weatherBoot />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import showWeather from "../components/weather/showWeather";
import weatherBoot from "../components/weather/weatherBoot";
import axios from "axios";
export default {
  data() {
    return {
      API_KEY: "8025a16eff45bba3f9f1156f91bb1190",
      currentCity: 0,
      search: false
    };
  },
  computed: {
    getCities() {
      return this.$store.getters.getCities;
    }
  },
  components: {
    showWeather,
    weatherBoot
  },
  methods: {
    alarm() {
      alert("alarm");
    },
    deleteCity(index) {
      this.$store.dispatch("deleteCity", index);
    },
    tabAction(bool, index = 0) {
      this.currentCity = index;
      this.search = bool
    }
  }
};
</script>
<style scoped>
.weather {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>