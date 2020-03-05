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
import TestWeather from '../views/TestWeather'
import Welcom from '../views/Welcom'
import MyPage from '../views/MyPage'
import state from '@/store/modules/auth_module/state'
// import showWeather from '../components/weather/showWeather'
// import weatherBoot from '../components/weather/weatherBoot'

Vue.use(VueRouter)

const routes = [
  {
    path: '/dashboard',
    name: '',
    component: Dashboard,
    children: [
      {path: '', component: showDashboard},
      {path: 'newproject', component: newProject}
    ],
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects,
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/team',
    name: '',
    component: Team,
    children: [
       {path: '', component: showTeam},
       {path: 'addperson',component: newPerson }
    ],
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/weather',
    component: TestWeather,
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/mypage',
    component: MyPage,
    beforeEnter (to, from, next) {
      if (state.tokenId) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/',
    name: 'login',
    component: Welcom,
    beforeEnter (to, from, next) {
      if (!state.tokenId) {
        next()
      } else {
        next('/dashboard')
      }
    }
  },
  {path: '/login', redirect: '/'}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
