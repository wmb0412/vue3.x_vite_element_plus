// test.ts

import { MockMethod } from 'vite-plugin-mock';
export default [
  {
    url: '/api/list',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 0,
        data: [{
          name: /[A-Z][a-z]{4,6}/,
          "age|1-100": 1,
        }, {
          name: /[A-Z][a-z]{4,6}/,
          "age|1-100": 1,
        }, {
          name: /[A-Z][a-z]{4,6}/,
          "age|1-100": 1,
        }, {
          name: /[A-Z][a-z]{4,6}/,
          "age|1-100": 1,
        }, {
          name: /[A-Z][a-z]{4,6}/,
          "age|1-100": 1,
        },]
      };
    },
  },
  {
    url: '/api/post',
    method: 'post',
    timeout: 2000,
    response: {
      code: 0,
      data: [{
        name: 'jack',
        age: 18,
      }, {
        name: 'jack',
        age: 18,
      }, {
        name: 'jack',
        age: 18,
      }, {
        name: 'jack',
        age: 18,
      }, {
        name: 'jack',
        age: 18,
      },]
    },
  },
  {
    url: '/api/text',
    method: 'post',
    rawResponse: async (req, res) => {
      let reqbody = '';
      await new Promise((resolve) => {
        req.on('data', (chunk) => {
          reqbody += chunk;
        });
        req.on('end', () => resolve(undefined));
      });
      res.setHeader('Content-Type', 'text/plain');
      res.statusCode = 200;
      res.end(`hello, ${reqbody}`);
    },
  },
] as MockMethod[];
