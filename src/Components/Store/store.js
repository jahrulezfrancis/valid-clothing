import { configureStore } from "@reduxjs/toolkit";
import { RootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { loggerMiddleware } from "./MiddleWares/logger";


const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['user']
}

const persitedRedecuer = persistReducer(persistConfig, RootReducer)

const middlewares = [loggerMiddleware];


export const store = configureStore({
  reducer: persitedRedecuer,
  middleware: middlewares,
});

export const persistor = persistStore(store);