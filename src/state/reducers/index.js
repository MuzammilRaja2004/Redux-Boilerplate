import { combineReducers } from "redux";
import amoutReducers from './amoutReducers'

const reducers = combineReducers({
    amount:amoutReducers
})
export default reducers