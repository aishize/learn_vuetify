<template>
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
                        <span class="black--text lighten-3">
                          <h3>{{key}}: {{item}}</h3>
                        </span>
                      </v-list-item>
                    </v-col>
                  </v-row>
                </v-list>
              </v-card>
            </v-col>
          </v-row>
        </v-img>
      </div>
      <div style="height: 100%; overflowY: scroll; overflowX: hidden">
          <v-card v-for="(day, index) in getForecast.data" :key="index" class="ma-2">
            <v-card-text><b>{{index}}</b></v-card-text>
            <v-row>
                <v-col v-for="(value,key) in day" :key="key" cols="6" class="my-n5">
                  <v-card-text>{{key}}: {{value}}</v-card-text>
                </v-col>
            </v-row>
          </v-card>
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
      dialog: false,
    };
  },
  computed: {
    getForecast() {
      return this.$store.getters.getForecast.filter(
        (city, index) => index === this.city
      )[0];
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
  height: 500px;
  grid-template-columns: 2fr 1fr;
}
</style>