import { combineReducers } from "redux";
import feedReducer from "./feed/reducer";
const reducer = combineReducers({
  feed: feedReducer,
});

export default reducer;
