import Vue from 'vue'
import VueRouter from 'vue-router'
import Invite from '../views/Invite.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '邀请好友',
    component: Invite
  },
]

const router = new VueRouter({
  routes
})

export default router
