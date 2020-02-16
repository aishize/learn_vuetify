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
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  }
};
</script>
