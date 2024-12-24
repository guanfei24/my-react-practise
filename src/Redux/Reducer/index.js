import themeReducer from "./themeReducer";
import todoReducer from "./toduReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    theme: themeReducer,
    todos: todoReducer,
});

export default rootReducer;