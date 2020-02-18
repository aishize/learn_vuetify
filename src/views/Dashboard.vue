<template>
  <div class="dashboard">
    <h3 class="subheading grey--text">Dashboard</h3>
      <show-dashboard />
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import showDashboard from '../components/showDashboard'
export default {
  components: {
    showDashboard
  }
};
</script>
<style scoped>

</style>
