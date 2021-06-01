import { _post } from '@/utils/http/index'
import { IuserLoginResponseData, IuserLoginRequestData } from './model/userModel'
export const login = (data: IuserLoginRequestData) => {
    return _post<IuserLoginResponseData>('/api/login', {
        data
    })
}