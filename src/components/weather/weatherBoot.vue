<template>
  <v-container>
    <v-row class="lightbox white--text pa-2 fill-height">
      <v-col cols="12" class='d-flex justfy-center'>
        <v-text-field
          solo
          prepend-inner-icon="mdi-cloud-search-outline"
          append-icon="mdi-crosshairs-gps"
          @keyup.enter="search"
          @click:append="getCurrentLocation"
          v-model="searchField"
          :label='inner'
        ></v-text-field>
        <v-btn color="white" @click="search" class='ml-2 mt-1'>search</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      searchField: "",
      inner: 'введите город'
    };
  },
  methods: {
    search() {
      this.$store.dispatch('addCityByName',this.searchField)
    },
    getCurrentLocation() {
      const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      };
      const success = pos => {
        const crd = pos.coords;
        const payload = {
          lat: crd.latitude,
          lon: crd.longitude
        };
        this.$store.dispatch("addCityByCoord", payload);
      };
      const error = err => {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      };
      navigator.geolocation.getCurrentPosition(success, error, options);
    } // возвращает объект с широтой и долготой текущей геолокации для экшена addCityByCoord
  }
};
</script>
<style scoped>
.weather {
  display: grid;
  grid-template-columns: 2fr 1fr;
}
</style>