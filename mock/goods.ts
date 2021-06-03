export const list = () => {
    return {
        url: '/api/list',
        method: 'post',
        response: ({ query }) => {
            return {
                code: 0,
                "data|26": [
                    {
                        "id|+1": 0,
                        "title|+1": [
                            /上衣/,
                            /短袖/,
                            /裤子/
                        ],
                        "price|+3": 0
                    }
                ]
            };
        },
    }
}
