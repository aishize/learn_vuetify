<template>
  <v-app>
    <Navbar />
    <v-content class="ma-5">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </v-content>
  </v-app>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  created(){
    this.$store.dispatch('primaryBoot')
    this.$store.dispatch('tryAutoLogin')
  }
};
</script>
