<template>
    <div class="weather">
      <v-img :aspect-ratio="4/3" src="@/assets/mops.jpg" v-if='city'>
          <v-row align="end" class="lightbox white--text pa-2 fill-height">
            <v-col cols="10">
              <v-card color="rgba(255, 255, 255, 0.1)" class="black--text lighten-3">
                <v-list color="rgba(255, 255, 255, 0.5)">
                  <v-row>
                    <v-col v-for="(item,key) in city" :key="key" cols="6">
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
        <div style="height: 100%; overflowY: scroll; overflowX: hidden" v-if='forecast'>
          <v-card v-for="(i,day) in forecast" :key="day" class="ma-2">
                <v-card-title>{{day}}</v-card-title>
                <v-list>
                  <v-list-item v-for='(value,key,n) in i' :key='n'>
                      {{key}} {{value}}
                  </v-list-item>
                </v-list>
          </v-card>
      </div>
    </div>
</template>
<script>
export default {
  props: ['index'],
  computed: {
    forecast(){
      return this.$store.getters.getForecast[this.index]
    },
    city(){
      return this.$store.getters.getCities[this.index]
    }
  }
}
</script>
<style scoped>
.weather{
  display: grid;
  height: 500px;
  grid-template-columns: 2fr 1fr;
}
</style>