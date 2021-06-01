import { IuserLoginRequestData } from './model/userModel'
export const login = () => {
    const userLoginRequestData: IuserLoginRequestData = {
        userName: 'wmb',
        passWord: '123456'
    }
    return {
        url: '/api/login',
        method: 'post',
        response: ({ body: { data } }) => {
            const { userName, passWord } = data;
            if (userName == userLoginRequestData.userName && passWord == userLoginRequestData.passWord) {
                const userInfo = {
                    "userId|1-100": 1,
                    token: /[a-z]{35}/
                }
                return {
                    code: 0,
                    data: userInfo
                };
            } else {
                return {
                    code: 1,
                    data: null
                };
            }

        },
    }
}