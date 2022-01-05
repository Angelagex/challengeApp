import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authReducer } from "../reducers/authReducer";
import { questionReducer } from "../reducers/questionReducer";
import { scoreReducer } from "../reducers/scoreReducer";
import { uiReducer } from "../reducers/uiReducer";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  question: questionReducer,
  score: scoreReducer
});

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
