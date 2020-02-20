import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Projects from '../views/Projects'
import Team from '../views/Team'
import Test from '../views/Test'
import newPerson from '../components/newPerson'
import showTeam from '../components/showTeam'
import showDashboard from '../components/showDashboard'
import newProject from '../components/newProject'
import TestTwo from '../views/TestTwo'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: '',
    component: Dashboard,
    children: [
      {path: '', component: showDashboard},
      {path: 'newproject', component: newProject}
    ]
  },
  {
    path: '/',
    name: 'projects',
    component: Projects
  },
  {
    path: '/team',
    name: '',
    component: Team,
    children: [
       {path: '', component: showTeam},
       {path: 'addperson',component: newPerson }
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/testwo',
    name: 'testwo',
    component: TestTwo
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
