<template>
  <div>
    <div class="weather">
      <div>
        <v-img :aspect-ratio="4/3" src="../../assets/mountains.jpg">
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col cols="10">
              <v-card color="rgba(255, 255, 255, 0.1)" class="black--text lighten-3">
                <v-list color="rgba(255, 255, 255, 0.5)">
                  <v-row>
                    <v-col v-for="(item,key) in getCity" :key="key" cols="6">
                      <v-list-item>
                        <span class="black--text lighten-3"><h3>{{key}}: {{item}}</h3></span>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div>
        <v-card
          v-for="(day,n) in getForecast"
          :key="n"
          max-width="25rem"
          min-height="20%"
          @click="alarm"
        >
          <!-- <v-card-title>{{day}}</v-card-title> -->
          <v-list v-for="(value,key) in day.data" :key="key">
            <v-list-title>{{key}}</v-list-title>
            <v-list-item v-for="(i,j) in value" :key="j">{{j}}: {{i}}</v-list-item>
          </v-list>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    city: Number
  },
  data() {
    return {
      API_KEY: "8025a16eff45bba3f9f1156f91bb1190"
    };
  },
  computed: {
    getForecast() {
      return this.$store.getters.getForecast;
    },
    getCity() {
      return this.$store.getters.getCities.filter(
        (city, index) => index === this.city
      )[0];
    }
  },
  methods: {
    alarm() {
      alert("alarm");
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