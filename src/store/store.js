import { createStore } from 'redux'
import reducer from "./reducer"
//创建store 把store 传进去
const store = createStore(reducer);

export default store;