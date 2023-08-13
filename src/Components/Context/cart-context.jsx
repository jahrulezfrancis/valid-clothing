import { createContext, useEffect, useState } from 'react';

export const addCartItem = (cartItems, productToAdd) => {
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

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
    cartCount: 0
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (product) => {
        const updatedCartItems = addCartItem(cartItems, product);
        setCartItems(updatedCartItems);
    };

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};