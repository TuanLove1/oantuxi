import { combineReducers } from "redux";
import gameReducer from "./game/gameReducer";

const rootReducer = combineReducers({
  gameReducer,
});
export default rootReducer;
