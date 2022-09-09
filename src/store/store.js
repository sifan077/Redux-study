import {combineReducers, createStore} from "redux";
import countReducer from "./reducer";
import flagReducer from "./flagReducer";

const reducer = combineReducers({
    countReducer: countReducer,
    flagReducer: flagReducer
});

const store = createStore(reducer);


export default store;