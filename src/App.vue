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
  mounted(){
    this.$store.dispatch('primaryBoot')
    
  }
};
</script>
