import { CategoriesActionTypes } from "./categories.type";


export const CategoriesIntialState = {
    categories: []
}

export const CategoriesReducer = (state = CategoriesIntialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CategoriesActionTypes.SetCategories:
            return { ...state, categories: payload }
        default:
            return state;
    }
}