import { combineReducers, createStore } from "redux";
import AppReducer from "./AppReducer";

const redusers = combineReducers({
    AppReducer,
});

const store = createStore(redusers);

window.store = store;

export default store;
