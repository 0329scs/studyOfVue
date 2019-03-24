import Vue from 'vue'
import VueRouter from 'vue-router'
// import HelloWorld from '@/views/HelloWorld'
// import NoticeList from '@/views/notice/NoticeList.vue'
// import NoticeDetail from '@/views/notice/NoticeDetail.vue'
// import NoticeRegister from '@/views/notice/NoticeRegister.vue'
// import PopupRegister from '@/views/popup/PopupRegister.vue'
import Layout from '@/components/Layout.vue'
import NotFound from '@/404.vue'
import Cookies from 'js-cookie'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/helloWorld',
    name: 'HelloWorld',
    hidden: true,
    children: [{
      path: 'helloWorld',
      component: () => import('@/views/HelloWorld')
    }]
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/registration',
        name: 'Registration',
        component: () => import('@/views/registration/Registration')
      }
    ]
  },
  {
    path: '/login',
    hidden: true,
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/notice',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'list',
        name: 'NoticeList',
        component: () => import('@/views/notice/NoticeList.vue'),
        beforeEnter: (to, from, next) => {
          console.log('======    to     ======')
          console.log(to)
          console.log('======    to     ======')

          console.log('======    from     ======')
          console.log(from)
          console.log('======    from     ======')

          if (Cookies.get('token')) {
            if (to.path === '/login') {
              next({ path: `/` })
            } else {
              next()
            }
          } else {
            if (to.path !== '/login') {
              // next({path:'/login'})
              next({path:`/login?redirect=${to.path}`})
            } else {
              next()
            }
          }
        }
      },
      {
        path: 'detail',
        name: 'NoticeDetail',
        component: () => import('@/views/notice/NoticeDetail.vue')
      },
      {
        path: 'register',
        name: 'NoticeRegister',
        component: () => import('@/views/notice/NoticeRegister.vue')
      }
  ]
  },
  {
    path: '/popup',
    component: Layout,
    hidden: true,
    children: [
      {
        path: 'register',
        name: 'PopupRegister',
        component: () => import('@/views/popup/PopupRegister.vue')
      }
    ]
  },
  // {
  //   path: '/popupRegister',
  //   name: 'PopupRegister',
  //   component: PopupRegister
  // },
  {
    path: '*',
    component: NotFound
  },
  
]

export default new VueRouter({
  routes
})
