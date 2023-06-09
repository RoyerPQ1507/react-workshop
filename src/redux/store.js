import {combineReducers, createStore,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { fragmentReducer, courseReducer, postReducer, specialityReducer, teacherReducer } from "./reducers";


export default createStore(
    combineReducers({
    postReducer,
    specialityReducer,
    courseReducer,
    teacherReducer,
    fragmentReducer
    }),
  composeWithDevTools(applyMiddleware(thunk))
)
