// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 큰 컴포넌트(라우터) 구성
import Vue from 'vue'
import App from './App'
import router from './router'
import css from './assets/css/reset.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
    el: '#app',
    router,
    css,
    components: { App },
    template: '<App/>',
})