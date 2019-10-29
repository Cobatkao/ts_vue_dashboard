import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { Message } from 'element-ui'
import router from "@/router";

/**
 * 请求拦截器：在每个请求头上附带token提交给server
 * 响应拦截器：负责全局处理业务请求的网络、业务报错等
 */

const service = axios.create({
    timeout: 60000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
    let token: string | null = localStorage.getItem('ts_token')
    if (token) {
        config.headers.authorization = token
    }
    return config
}, (err: any) => {
    Promise.reject(err)
})

service.interceptors.response.use((config: AxiosResponse) => {
    return config
}, (err: any) => {
    let errMsg: string = ""
    if (err && err.response && err.response.status) {
        switch(err.response.status) {
            case 401:
                errMsg = "登录状态失效，请重新登录"
                localStorage.removeItem('ts_token')
                router.push('/login')
                break
            case 403:
                errMsg = "拒绝访问"
                break
            case 408:
                errMsg = "请求超时"
                break
            case 500:
                errMsg = "服务器内部错误"
                break
            case 501:
                errMsg = "服务器未实现"
                break
            case 502:
                errMsg = "网关错误"
                break
            case 503:
                errMsg = "服务器不可用"
                break
            case 504:
                errMsg = "网关超时"
                break
            case 505:
                errMsg = "HTTP版本不受支持"
                break
            default:
                errMsg = err.response.data.msg // 默认情况下获取错误字段，如400下的“密码错误!”
                break
        }
    } else {
        errMsg = err
    }

    console.log(err.response)
    Message.error(errMsg)
    return Promise.reject(errMsg)
})

export default service