import axios, { Canceler, AxiosRequestConfig, CancelToken } from 'axios'
import qs from 'qs'
const paddingMap = new Map<string, Canceler>()

//添加paddingMap
const addPadding = (axiosConfig: AxiosRequestConfig) => {
    axiosConfig.cancelToken = axiosConfig.cancelToken || new axios.CancelToken((ct) => {
        //如果不存在加入padding中
        const url = getPaddingUrl(axiosConfig)
        if (!paddingMap.get(url)) {
            paddingMap.set(url, ct)
        }
    })
}
//移除单个paddingMap
const removePadding = (axiosConfig: AxiosRequestConfig) => {
    const url = getPaddingUrl(axiosConfig)
    if (paddingMap.has(url)) {
        const cancel = paddingMap.get(url);
        cancel && cancel();
        paddingMap.delete(url)
    }
}
//移除所有paddingMap
const clearPadding = () => {
    for (const [url, cancel] of paddingMap) {
        cancel && cancel();
    }
    paddingMap.clear();
}
//根据config获取key值（url）
const getPaddingUrl = (axiosConfig: AxiosRequestConfig) => {
    return [axiosConfig.method, axiosConfig.url, getString(axiosConfig.data), qs.stringify(axiosConfig.params)].join('&');
}
//获取string request的data是对象 而response是字符串
const getString = (data: string | object) => {
    if (typeof data == 'string') {
        return data
    }
    if (typeof data == "object") {
        return JSON.stringify(data)
    }
}
const axiosCancel = {
    addPadding,
    removePadding,
    clearPadding
};
export default axiosCancel