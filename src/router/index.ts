import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/Index.vue'

Vue.use(VueRouter)

export const asyncRouterMap = [
  {
    name: 'dashboard',
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        name: 'home',
        path: 'home',
        component: () => import('../views/Home.vue'),
      }
    ]
  },
  {
    name: 'dataManage',
    path: '/dataManage',
    redirect: '/tableData', // 点击后默认跳转
    component: Layout,
    children: [
      {
        name: 'formData',
        path: 'formData',
        component: () => import('../views/DataManage/FormData.vue'),
      },
      {
        name: 'chartsData',
        path: 'chartsData',
        component: () => import('../views/DataManage/ChartsData.vue'),
      },
      {
        name: 'tableData',
        path: 'tableData',
        component: () => import('../views/DataManage/TableData.vue'),
      }
    ]
  },
  {
    name: 'userManage',
    path: '/userManage',
    redirect: '/accountData', // 点击后默认跳转
    component: Layout,
    children: [
      {
        name: 'accountData',
        path: 'accountData',
        component: () => import('../views/UserManage/AccountData.vue'),
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    redirect: '/userInfo',
    component: Layout,
    children: [
      {
        name: 'userInfo',
        path: 'userInfo',
        component: () => import('../views/UserManage/UserInfo.vue'),
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    component: () => import('../views/404.vue'),
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/password',
    name: 'password',
    component: () => import('../views/Login/Password.vue')
  },
]

const router: any =  new VueRouter({
  mode: "history",
  // base: process.env.BASE_URL,
  routes: asyncRouterMap
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