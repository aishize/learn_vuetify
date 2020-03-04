<template>
  <v-app>
    <Navbar />
    <v-content class="ma-5">
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  created(){
    this.$store.dispatch('tryAutoLogin')
    this.$store.dispatch('primaryBoot')
  }
};
</script>
