import { createStoreHook } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import HeaderReducer from "./header-reducer";
import ProfileReducer from "./profile-reducer";



let reducers = combineReducers({
    header:HeaderReducer,
    profile:ProfileReducer,
})


const store = createStore(reducers, applyMiddleware(thunk));


window.store = store;

export default store;
