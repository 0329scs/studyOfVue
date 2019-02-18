// 작은 컴포넌트(라우터) 구성 //

import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import weat from '@/components/weat'
import temp from '@/components/temp'
import rain from '@/components/rain'
import wind from '@/components/wind'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/hello',
            name: 'Hello',
            component: HelloWorld
        },
        {
            path: '/weat',
            name: 'weat',
            component: weat
        },
        {
            path: '/temp',
            name: 'temp',
            component: temp
        },
        {
            path: '/rain',
            name: 'rain',
            component: rain
        },
        {
            path: '/wind',
            name: 'wind',
            component: wind
        }
    ]
});