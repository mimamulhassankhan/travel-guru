import { createStore } from "redux";
import { appReducer } from "../Reducers/appReducers";

export const appStore = createStore(appReducer);