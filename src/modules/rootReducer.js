import { combineReducers } from "@reduxjs/toolkit";

import questionsModule from "./questionsModule";
export const rootReducer = combineReducers({
  questions: questionsModule.reducer,
});
