import axios ,{Canceler}from 'axios';
import axiosCancel from './axiosCancel'
const padding= new Map<string,Canceler>()
let cancelToken = axios.CancelToken;
const http = axios.create({
    baseURL: import.meta.env.BASE_URL
})
// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    axiosCancel.removePadding(config)
    axiosCancel.addPadding(config)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    axiosCancel.removePadding(response.config)
    return response;
}, function (error) {
    console.error('error:',error)
    // 对响应错误做点什么
    return Promise.reject(error);
});
export default http;