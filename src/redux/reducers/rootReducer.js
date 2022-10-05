import { combineReducers } from "redux";
import movieReducer from "./movie"
const rootReducer = combineReducers({
    moviesData:movieReducer,
});
export default rootReducer;