import { CategoriesActionTypes } from "./categories.type";


export const CategoriesIntialState = {
    categoriesMap: {}
}

export const CategoriesReducer = (state = CategoriesIntialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CategoriesActionTypes.SetCategoriesMap:
            return { ...state, categoriesMap: payload }
        default:
            return state;
    }
}