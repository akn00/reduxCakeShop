import {craeteStore} from 'redux'
import cakeReducer from './cake/cakeReducer'

const store=craeteStore(cakeReducer)
export default store