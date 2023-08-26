import { createSelector } from "reselect"

const SelectCartReducer = (state) => state.cart;

export const SelectCartItems = createSelector(
    [SelectCartReducer],
    (cart) => cart.cartItems
)


export const SelectIsCartOpen = createSelector(
    [SelectCartReducer],
    (cart) => cart.isCartOpen
)


export const SelectCartCount = createSelector(
    [SelectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
)


export const SelectCartTotal = createSelector(
    [SelectCartItems],
    (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
)