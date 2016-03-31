import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import list from './listReducer'



export default combineReducers({
    list,
    routerReducer
})

