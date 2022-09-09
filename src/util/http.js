import axios from "axios";


axios.defaults.baseURL = "/api";
axios.defaults.withCredentials = true
axios.defaults.timeout = 100000
// axios请求拦截器
axios.interceptors.request.use(
    config => {
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// axios响应拦截器
axios.interceptors.response.use(
    function (response) {
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)