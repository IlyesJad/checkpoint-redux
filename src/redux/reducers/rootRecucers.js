import { combineReducers } from "redux";
import tasksReducers from './taskReducers';

const rootReducer = combineReducers({tasksReducers})

export default rootReducer;