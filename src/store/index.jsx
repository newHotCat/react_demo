import { combineReducers, createStore } from 'redux'
import {ADDTODO} from './action'

function todos (state = [4], action) {
    switch (action.type){
        case ADDTODO:
            return [
                ...state,
                action.text
            ]
        break;
        default:
            return state
    }
}

const reducer = combineReducers({
  todos
})
const store = createStore(reducer)
export default store