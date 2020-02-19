<template>
  <v-container class="my-5 col-lg-6 col-md-6 col-sm-6">
    <v-row>
      <v-col cols="12">
        <h1>TEST PAGE</h1>
      </v-col>
      <v-col>
        <h3>yeah, it was was created to test every</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="errored">
        <h2 class="red--text">ERROR</h2>
      </v-col>
      <v-col v-else>
        <v-col v-if="loading">...loading</v-col>
        <v-col v-else>
          <v-card v-for="(val,i) in info" :key="i" class="mb-4">
            <v-list-item>
              <v-list-item-content>
                <div class="mb-4">code: {{val.code}}</div>
                <div class="overline mb-4">rate: {{val.rate}}</div>
                <div class="overline mb-4">rate_float: {{val.rate_float.toFixed(2)}}</div>
                <div class="overline mb-4">description: {{val.description}}</div>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      info: null,
      loading: true,
      errored: false
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi))
      .catch(error => {
        console.error(error.message);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>