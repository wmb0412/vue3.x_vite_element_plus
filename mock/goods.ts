export const list = () => {
    return {
        url: '/api/list',
        method: 'post',
        response: ({ query }) => {
            return {
                code: 0,
                "data|10-15": [
                    {
                        "id|+1": 0,
                        "title|+1": [
                            /上衣[a-z]{3,4}/,
                            /短袖[a-z]{3,4}/,
                            /裤子[a-z]{3,4}/
                        ],
                        "price|1-100": 0
                    }
                ]
            };
        },
    }
}
