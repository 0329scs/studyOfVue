import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en' // lang i18n

import '@/styles/index.scss' // global css

Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
