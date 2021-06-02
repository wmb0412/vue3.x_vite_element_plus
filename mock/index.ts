import { MockMethod } from 'vite-plugin-mock';
import { login } from './login'
import {list} from './goods'
export default [
    login(),
    list()
] as MockMethod[];