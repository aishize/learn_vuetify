<template>
    <v-container>
       <carousel-3d :width="500" :height="500" :inverse-scaling="1000" :space="800" :minSwipeDistance="10000">
           <slide :index='0'>
               <SignUp />
           </slide>
           <slide :index='1'>
               <app-sign-in />
           </slide>
           <slide :index='2'>
               <simple />
           </slide>
       </carousel-3d>
    </v-container>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'
import simple from '@/components/auth/simple'
export default {
    components: {
        Carousel3d,
        Slide,
        appSignIn: SignIn,
        SignUp,
        simple
    }
}
</script>
<style lang="scss" scoped>
.carousel-3d-container {
  .carousel-3d-slide {
    border: none;
    background-color: rgba(0,0,0,0);
  }
}
</style>