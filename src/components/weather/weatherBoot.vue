<template>
  <div>
    <div class="weather">
      <div>
        <v-img :aspect-ratio="4/3" src="../../assets/mountains.jpg">
          <v-row align="center" justify="center" class="lightbox white--text pa-2 fill-height">
            <v-col></v-col>
            <v-col cols="6">
              <v-text-field
                solo
                prepend-inner-icon="mdi-cloud-search-outline"
                append-icon="mdi-crosshairs-gps"
                @click:append="alarm"
                v-model="searchField"
              ></v-text-field>
            </v-col>
            <v-col class="mt-n6">
              <v-btn color="white" @click="search">search</v-btn>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div>
        <v-card v-for="(day,n) in 5" :key="n" max-width="14rem" min-height="20%" :disabled="true">
          <v-card-title></v-card-title>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      searchField: "",
    };
  },
  methods: {
    alarm() {
      var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };

      const success = (pos) => {
        var crd = pos.coords;

        console.log("Your current position is:");
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
        let payload = {
            lat: crd.latitude,
            lon: crd.longitude
        }
        this.$store.dispatch('addCityByCoord',payload)
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
    },
    search() {
      if (this.searchField) {
        this.$store.dispatch("addCityByName", this.searchField);
      } else {
        return null;
      }
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