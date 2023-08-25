import { combineReducers } from "redux";
import { UserReducer } from "./user/user-reducer";
import { CategoriesReducer } from "./Categories/categories.reducer";

export const RootReducer = combineReducers({
    user: UserReducer,
    categories: CategoriesReducer
})