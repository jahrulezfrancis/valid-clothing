import { Cart_Action_types } from "./cart.types";
import { createAction } from "../../Utils/Reducer/Reducer.utils";

//logic to handle cartitem handling
const addCartItem = (cartItems, productToAdd) => {
    const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex].quantity += 1;
        return updatedCartItems;
    }

    return [...cartItems, { ...productToAdd, quantity: 1 }];
};


//logic to identify the right item to remove from cart
const removeFromCart = (cartItems, productToRemove) => {
    const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === productToRemove.id
    );

    if (existingCartItemIndex !== -1) {
        const updatedCartItems = [...cartItems];

        if (updatedCartItems[existingCartItemIndex].quantity === 1) {
            updatedCartItems.splice(existingCartItemIndex, 1);
        } else {
            updatedCartItems[existingCartItemIndex].quantity -= 1;
        }

        return updatedCartItems;
    }

    return cartItems;
};


//function used to clear item from cart
const clearFromCart = (cartItems, productToClear) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(productToClear, 1);
    return updatedCartItems;
}

//function to handle cart open state
export const setIsCartOpen = (boolean) => {
    createAction(Cart_Action_types.setIsCartOpen, boolean)
}

//function to add item to cart
export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(Cart_Action_types.setCartItems, newCartItems);
};

//function to remove item from cart
export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeFromCart(cartItems, productToRemove);
    return createAction(Cart_Action_types.setCartItems, newCartItems);
};

//function used to clear item from cart list
export const clearItemFromCart = (cartItems, productToClear) => {
    const newCartItems = clearFromCart(cartItems, productToClear);
    return createAction(Cart_Action_types.setCartItems, newCartItems);
};

