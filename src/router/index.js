import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '../views/MainView.vue'
import ProfileView from '../views/ProfileView.vue'
import AddPizzaView from '../views/AddPizzaView.vue'
import GetOrdersView from '../views/GetOrdersView.vue'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.use(VueRouter, BootstrapVue, IconsPlugin)


const routes = [
  {
    path: '/',
    name: 'home',
    component: MainView
  }, 
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/add_pizza',
    name: 'add_pizza',
    component: AddPizzaView
  },
  {
    path: '/get_orders',
    name: 'orders',
    component: GetOrdersView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
