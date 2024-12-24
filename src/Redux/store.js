import { createStore } from "redux";
import todoReducer from "./Reducer/toduReducer";
import rootReducer from "./Reducer";

const store = createStore(rootReducer);

export default store;
