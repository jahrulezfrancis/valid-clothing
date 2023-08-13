import { createContext, useState } from 'react';

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

    return [...cartItems, { ...productToAdd, quantity: null }];
};

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { },
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (products) =>
        setCartItems(addCartItem(cartItems, products));

    const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};