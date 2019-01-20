import Vue from 'vue' // vue를 사용한다(?) / like React(?)
import Router from 'vue-router' // Router를 <vue-router />라는 이름을 사용해 import 시킨다.
import HelloWorld from '@/components/HelloWorld' // ''안에 HelloWorld.vue 파일을 import 시킨다.

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ] // HelloWorld를 routes 시킨다. (Router로 출력한다.)
})
