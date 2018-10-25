import axios from 'axios'
import {Toast} from 'antd-mobile'

//request interceptor
axios.interceptors.request.use(function(config){
    Toast.loading('loading...',0)
    return config
})

//response interceptor
axios.interceptors.response.use(function(config){
    Toast.hide()
    return config
})