import axios, { Canceler, AxiosRequestConfig } from 'axios';
import axiosCancel from './axiosCancel'
import { IresponseData } from './types'
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
    return response.data;
}, function (error) {
    console.error('error:', error)
    // 对响应错误做点什么
    return Promise.reject(error);
});

export const _post = <T = any>(url: string, config: AxiosRequestConfig): Promise<IresponseData<T>> => {
    return http.post(url, config)
}
export const _get = <T = any>(url: string, config: AxiosRequestConfig): Promise<IresponseData<T>> => {
    return http.get(url, config)
}
export const _put = <T = any>(url: string, config: AxiosRequestConfig): Promise<IresponseData<T>> => {
    return http.put(url, config)
}
export const _delete = <T = any>(url: string, config: AxiosRequestConfig): Promise<IresponseData<T>> => {
    return http.delete(url, config)
}
export default http;