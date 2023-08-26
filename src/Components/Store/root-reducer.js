import { combineReducers } from "redux";
import { UserReducer } from "./user/user-reducer";
import { CategoriesReducer } from "./Categories/categories.reducer";
import { CartReducer } from "./Cart/cart.reducer";

export const RootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer,
    cart: CartReducer
})