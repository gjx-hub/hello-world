import axios from 'axios'

const instance = axios.create({
    timeout: 1000,
    headers: {
        "Miaomiao-Token": 'token'
    }
})

//添加请求拦截器
instance.interceptors.request.use(function (config) {
    return config
}, function (error) {
    return Promise.reject(error)
})

//添加相应拦截器
instance.interceptors.response.use(function (response) {
    const data = response.data
    if (data.status != 0) {
        alert(data.msg)
    }
    return data
}, function (error) {
    return Promise.reject(error)
})



function get(url,config){
    return instance.get(url,config)
}

function post(url,body,config){
    return instance.post(url,body,config)
}

export default{
    get,post
}