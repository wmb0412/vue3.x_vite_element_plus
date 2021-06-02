import { _post } from '@/utils/http/index'
import { Goods } from './model/goodsModel'
export const list = () => {
    return _post<Goods[]>('/api/list', {
        
    })
}