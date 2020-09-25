import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { rootReducer } from "./modules/rootReducer";

export const setupStore = () => {
  const middlewares = [...getDefaultMiddleware(), logger];

  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store;
};
