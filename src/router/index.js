import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/iryna/',
    name: 'home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to) {
    if (to.hash) {
      return {
        selector: to.hash
      } 
    } 
    return {x:0, y:0}
  }
})

export default router
