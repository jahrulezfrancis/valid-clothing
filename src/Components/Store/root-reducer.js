import { UserReducer } from "./user/user-reducer";
import { combineReducers } from "@reduxjs/toolkit";
import { categoriesReducer } from "./Categories/categories.reducer";
import { cartReducer } from "./Cart/cart.slice";


export const RootReducer = combineReducers({
    user: UserReducer,
    categories: categoriesReducer,
    cart: cartReducer
})