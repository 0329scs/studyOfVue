import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Cookies from 'js-cookie'

Vue.use(Vuex)

const user = {

    state: {
        // 공통변수
        id: '',
        loading: false
    },

    mutations: {
        // 동기로직 공통함수
        SET_ID: (state, id) => {
            state.id = id
        },
        SET_LOADING: (state, loading) => {
            state.loading = loading
        }
    },

    actions: {
        // 비동기로직 즉 통신

        Login({ commit }, userInfo) {
            axios.post('http://localhost:3000/login', {
                data: userInfo
            })
            .then(res => {
                console.log(res)
                //commit은 mutations을 부르는 명령어
                commit('SET_ID', res.data.body.LOGIN_ID)

                Cookies.set('token', res.data.body.LOGIN_ID, {expires:1})//expires = 지속시간(1시간)
            })
            .catch(err => {
                console.log(err)
                alert('로그인 정보가 일치하지 않습니다.')
            })
            .finally(_ => {
                //로그인 통신이 진행 된 후 로딩을 true > false로 바꿔줘야함
                commit('SET_LOADING', false)
            })
        }
    }
}

export default new Vuex.Store({
    modules: {
        user
    }
})