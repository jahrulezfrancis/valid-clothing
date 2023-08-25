import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./root-reducer";
import logger from "redux-logger";

const middlewares = [logger]; // Include any other middlewares here

export const store = configureStore({
  reducer: RootReducer, // Specify the root reducer
  middleware: middlewares, // Specify middleware
});
