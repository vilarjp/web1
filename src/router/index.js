import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Login from '@/pages/Login'
import Cadastro from '@/pages/Cadastro'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Index', component: Index },
    { path: '/login', name: 'Login', component: Login },
    { path: '/cadastro', name: 'Cadastro', component: Cadastro }
  ]
})
