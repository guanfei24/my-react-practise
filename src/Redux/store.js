import { createStore } from "redux";
import todoReducer from "./Reducer/toduReducer";

const store = createStore(todoReducer);

export default store;
