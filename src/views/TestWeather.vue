<template>
  <v-container>
    <v-row class="d-flex justify-center">
      <v-col cols="12">
        <div class="grid mb-n2">
          <v-tabs v-if="getCities" v-model='index'>
            <v-tab
              v-for="(item,n) in getCities"
              :key="n"
              icon
              @click="syncTabWithContent(n)"
            >
              <span>{{item['город']}}</span>
              <template>
                <v-icon right @click="deleteCity(n)">mdi-close-circle-outline</v-icon>
              </template>
            </v-tab>
          </v-tabs>
          <v-dialog v-model="dialog" persistent max-width="400px" style='overflowX= hidden'>
            <template #activator="{ on: dialog }">
              <v-tooltip top>
                <template #activator="{ on: tooltip }">
                  <v-btn text v-on="{...dialog, ...tooltip }" icon fab @click='clearSearchField'>
                    <v-icon  large color="red">mdi-map-marker-plus</v-icon>
                  </v-btn>
                </template>
                <span>new location</span>
              </v-tooltip>
            </template>
            <!-- <weatherBoot /> -->
            <!-- <v-btn @click="dialog=false" text color="white">close</v-btn> -->
              <v-row class="lightbox white--text pa-2 fill-height">
                <v-col cols="12" class="d-flex justfy-center">
                  <v-text-field
                    ref='search'
                    solo
                    prepend-inner-icon="mdi-cloud-search-outline"
                    append-icon="mdi-crosshairs-gps"
                    @keyup.enter="search"
                    @click:append="getCurrentLocation"
                    v-model="searchField"
                    :label="inner"
                  ></v-text-field>
                  <v-btn color="white" @click="search" class="ml-2 mt-1">search</v-btn>
                </v-col>
              </v-row>
            <v-btn @click='dialog=false'>close</v-btn>
          </v-dialog>
          <v-menu 
            :nudge-width="40"
            offset-x
            origin='center center' transition='scale-transition'>
            <template #activator="{on: menu, attrs}">
               <v-tooltip top>
                 <template #activator="{on: tooltip}">
                   <v-btn icon fab v-bind='attrs' v-on="{...menu, ...tooltip}">
                  <v-icon large>
                   mdi-cloud-download-outline
                </v-icon>
               </v-btn>
                 </template>
                 <span>Save or Load</span>
               </v-tooltip>
            </template>
            <v-list>
              <v-list-item @click='saveData'>
                <v-list-item-title>{{snl.save}}</v-list-item-title>
              </v-list-item>
              <v-list-item @click='loadData'>
                <v-list-item-title>{{snl.load}}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
        <div v-if="getCities">
          <showWeather :index="index" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import showWeather from "@/components/weather/showWeather";
// import weatherBoot from "@/components/weather/weatherBoot";
export default {
  data() {
    return {
      dialog: true,
      index: 0,
      searchField: "",
      inner: 'введите город',
      currentTab: 1,
      snl: {
        save: '    save    ',
        load: '    load    '
      }
    };
  },
  components: {
    showWeather
  },
  computed: {
    getCities() {
      return this.$store.getters.getCities;
    }
  },
  methods: {
    syncTabWithContent(n) {
      this.index = n;
    },
    deleteCity(index) {
      this.$store.dispatch("deleteCity", index);
      this.syncTabWithContent(this.getCities.length - 1);
    },
    search() {
      this.$store.dispatch('addCityByName',this.searchField)
      this.dialog = false
    },
    clearSearchField(){
      this.$refs.search.reset()
    },
    getCurrentLocation() {
      this.dialog = false
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
    },
    saveData(){
      const weather = {
        cities: this.$store.getters.getCities,
        forecast: this.$store.getters.getForecast
      }
      this.$store.dispatch('saveData', weather)
    },
    loadData(){
      this.$store.dispatch('loadData')
    }
  }
};
</script>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}
</style>