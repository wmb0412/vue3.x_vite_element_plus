import http from '@/utils/http/index'
export const list=()=>{
    return http.get('api/list')
}
