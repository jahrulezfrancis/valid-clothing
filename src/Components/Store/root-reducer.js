import { userReducer } from "./user/user-slice";
import { combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "./Categories/categories.slice";
import { cartReducer } from "./Cart/cart.slice";
import { transactionReducer } from "./Payment/transactionSlice";


export const RootReducer = combineReducers({
    user: userReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    transaction: transactionReducer
})