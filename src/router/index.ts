import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout/Index.vue'

Vue.use(VueRouter)

export const asyncRouterMap = [
  {
    name: 'dashboard', // 路由名称
    path: '/',
    redirect: '/home',
    component: Layout,
    display: true,
    children: [
      {
        name: 'home',
        path: '/home',
        meta: {
          title: '首页',
          icon: 'fa fa-home'
        },
        component: () => import('../views/Home.vue'),
      }
    ]
  },
  {
    name: 'dataManage',
    path: '/dataManage',
    redirect: '/tableData', // 点击后默认跳转
    component: Layout,
    display: true,
    meta: {
      title: '数据管理',
      icon: 'fa fa-database'
    },
    children: [
      {
        name: 'formData',
        path: '/formData',
        meta: {
          title: '表单管理',
          icon: 'fa fa-file-text-o'
        },
        component: () => import('../views/DataManage/FormData.vue'),
      },
      {
        name: 'chartsData',
        path: '/chartsData',
        meta: {
          title: '图表管理',
          icon: 'fa fa-bar-chart'
        },
        component: () => import('../views/DataManage/ChartsData.vue'),
      },
      {
        name: 'tableData',
        path: '/tableData',
        meta: {
          title: '表格管理',
          icon: 'fa fa-table'
        },
        component: () => import('../views/DataManage/TableData.vue'),
      }
    ]
  },
  {
    name: 'userManage',
    path: '/userManage',
    redirect: '/accountData', // 点击后默认跳转
    display: true,
    component: Layout,
    children: [
      {
        name: 'accountData',
        path: '/accountData',
        meta: {
          title: '账号管理',
          icon: 'fa fa-user-plus'
        },
        component: () => import('../views/UserManage/AccountData.vue'),
      }
    ]
  },
  {
    name: 'user',
    path: '/user',
    redirect: '/userInfo',
    display: false,
    component: Layout,
    children: [
      {
        name: 'userInfo',
        path: '/userInfo',
        meta: {
          title: '个人中心'
        },
        component: () => import('../views/UserManage/UserInfo.vue'),
      }
    ]
  },
  {
    name: '404',
    path: '/404',
    display: false,
    meta: {
      title: '404'
    },
    component: () => import('../views/404.vue'),
  },
  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/login',
    name: 'login',
    display: false,
    meta: {
      title: '登录'
    },
    component: () => import('../views/Login/Login.vue')
  },
  {
    path: '/password',
    name: 'password',
    display: false,
    meta: {
      title: '忘记密码'
    },
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