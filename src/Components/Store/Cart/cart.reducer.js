import { Cart_Action_types } from "./cart.types";


const CartInitialState = {
    isCartOpen: false,
    cartItems: [],
}

export const CartReducer = (state = CartInitialState, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case Cart_Action_types.setCartItems:
            return {
                ...state,
                cartItems: payload
            };
        case Cart_Action_types.setIsCartOpen:
            return {
                ...state,
                isCartOpen: payload,
            };
        default:
            return state;
    }
}
