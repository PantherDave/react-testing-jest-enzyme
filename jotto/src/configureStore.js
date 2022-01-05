import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {
  success: false,
  guessedWords: [],
  secretWord: null,
};

export const middlewares = [ReduxThunk];

export default createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middlewares)
);
