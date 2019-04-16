import axios from 'axios'

const service = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 5000
})

 // userLogin
export const userLogin = (data) => {
    return service({
        url: '/login',
        method: 'post',
        data
    })
}

// notice...
export const noticeList = (params) => {
    return service({
        url: `/notice/list/${params}`,
        method: 'get'
    })
}
export const noticeDetail = (data) => {
    return service({
        url: `notice/detail/${data}`,
        methode: 'get'
    })
}
export const noticeDelete = (data) => {
    return service({
        url: `notice/delete`,
        method: 'post',
        data
    })
}
export const noticeRegister = (data) => {
    return service({
        url: `/notice/register`,
        method: `post`,
        data
    })
}
export const noticeModify = (data) => {
    return service({
        url: `/notice/modify`,
        method: 'post',
        data
    })
}
// 회원가입
export const registration = (data) => {
    return service.post('/registration', data)
}