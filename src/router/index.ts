import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router: any =  new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import ('../views/Layout/Index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import ('../views/Login/Login.vue')
    },
    {
      path: '/password',
      name: 'password',
      component: () => import ('../views/Login/Password.vue')
    },
  ]
})

router.beforeEach((to: any, from: any, next: any) => {
  let isLogin: boolean = !!localStorage.getItem('ts_token')
  if (to.path === '/login' || to.path === '/password') {
    next()
  } else {
    isLogin ? 
      next() :
        next('/login')
  }
})

export default router