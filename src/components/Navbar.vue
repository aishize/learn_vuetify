<template>
  <nav>
     <v-app-bar app flat>
         <v-app-bar-nav-icon @click="drawer =!drawer" class="red--text"></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">Todo</span>
            <span>Aishize</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      
     </v-app-bar>
     <v-navigation-drawer v-model="drawer" app class="primary"> 
         <v-row class="text-center">
           <v-col>
               <v-avatar size="100">
                   <v-img :src="require('../views/images/mops.jpg')"/>
               </v-avatar>
               <p class="white--text subheading mt-1">Aishize</p>
           </v-col>
         </v-row>
      <v-list>
          <v-list-item v-for="(link,i) in links" :key="i" router :to="link.route">
              <v-list-item-action>
                  <v-icon class="white--text">{{link.icon}}</v-icon>
              </v-list-item-action>
             <v-list-item-content>
                  <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
             </v-list-item-content>
          </v-list-item>
      </v-list>
    </v-navigation-drawer>
    

  </nav>
</template>

<script>
export default {
    data(){
        return {
            drawer: false,
            links: [
                {icon: 'mdi-view-dashboard-outline', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder-table', text: 'Projects Info', route: '/projects'},
                {icon: 'mdi-account-group', text: 'Team', route: '/team'}
            ]
        }
    }
}
</script> 
<style scoped>

</style>