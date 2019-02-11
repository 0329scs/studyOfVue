import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import NoticeList from '@/views/notice/NoticeList.vue'
import NoticeDetail from '@/views/notice/NoticeDetail.vue'
import NoticeRegister from '@/views/notice/NoticeRegister.vue'
import PopupRegister from '@/views/popup/PopupRegister.vue'
import NotFound from '@/404.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  },
  {
    path: '/popupRegister',
    name: 'PopupRegister',
    component: PopupRegister
  },
  {
    path: '/noticeList',
    name: 'NoticeList',
    component: NoticeList
  },
  {
    path: '/noticeDetail',
    name: 'NoticeDetail',
    component: NoticeDetail
  },
  {
    path: '/noticeRegister',
    name: 'NoticeRegister',
    component: NoticeRegister
  },
  {
    path: '*',
    component: NotFound
  },
  
]

export default new VueRouter({
  routes
})
