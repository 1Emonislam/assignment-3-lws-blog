import { combineReducers } from "redux";
import blogReducer from "./blogs/reducers";

const rootReducer = combineReducers({
    blogs: blogReducer,
});

export default rootReducer;