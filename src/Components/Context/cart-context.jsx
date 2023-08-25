import { createContext, useReducer } from 'react';
import { createAction } from '../Utils/Reducer/Reducer.utils';

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

const clearFromCart = (cartItems, productToClear) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(productToClear, 1);
    return updatedCartItems;
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    clearItemFromCart: () => { },
    removeItemFromCart: () => { },
    cartCount: 0,
    totalPrice: 0
});

const TypeOfCartActions = {
    setCartItems: "setCartItems",
    setIsCartOpen: 'setIsCartOpen',
    setCartCount: "setCartCount",
    setCartTotal: 'setCartTotoal'
}

const InitialState = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0
}

const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case TypeOfCartActions.setCartItems:
            return {
                ...state,
                ...payload
            }
        case TypeOfCartActions.setIsCartOpen:
            return {
                ...state,
                isCartOpen: payload,
            }
        default:
            throw new Error(`Unhandled type ${type}`)
    }
}

export const CartProvider = ({ children }) => {
    const [{ cartItems, isCartOpen, cartCount, totalPrice }, dispatch] = useReducer(CartReducer, InitialState)

    const updateCartItemReducer = (cartItems) => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)

        const payload = {
            cartItems,
            cartCount: newCartCount,
            totalPrice: newCartTotal
        }

        dispatch(createAction(TypeOfCartActions.setCartItems, payload))
    }

    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd);
        updateCartItemReducer(newCartItems);
    };

    const removeItemFromCart = (productToRemove) => {

        const newCartItems = removeFromCart(cartItems, productToRemove);
        updateCartItemReducer(newCartItems);
    };

    const clearItemFromCart = (productToClear) => {
        const newCartItems = clearFromCart(cartItems, productToClear);
        updateCartItemReducer(newCartItems);
    };

    const setIsCartOpen = (bool) => {
        dispatch(createAction(TypeOfCartActions.setIsCartOpen, bool))
    }

    const value = { isCartOpen, setIsCartOpen, cartItems, totalPrice, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};