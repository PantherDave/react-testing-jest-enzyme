import { combineReducers } from "redux";
import success from "./successReducer";
import guessedWordsReducer from "./guessedWordsReducer";

export default combineReducers({ success, guessedWordsReducer });
