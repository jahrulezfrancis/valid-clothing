import { createContext, useEffect, useState } from 'react';

const addCartItem = (cartItems, productToAdd) => {
    const existingCartItemIndex = cartItems.findIndex(
        (cartItem) => cartItem.id === productToAdd.id
    );
    console.log(cartItems);

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
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    clearItemFromCart: () => { },
    removeItemFromCart: () => { },
    cartCount: 0,
    totalPrice: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newTotoalPrice = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
        setTotalPrice(newTotoalPrice)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        const updatedCartItems = addCartItem(cartItems, productToAdd);
        setCartItems(updatedCartItems);
    };

    const removeItemFromCart = (productToRemove) => {
        const updatedCartItems = removeFromCart(cartItems, productToRemove);
        setCartItems(updatedCartItems);
    };

    const clearItemFromCart = (productToClear) => {
        const updatedCartItems = clearFromCart(cartItems, productToClear);
        setCartItems(updatedCartItems);
    };

    const value = { isCartOpen, setIsCartOpen, cartItems,totalPrice, addItemToCart, cartCount, removeItemFromCart, clearItemFromCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};