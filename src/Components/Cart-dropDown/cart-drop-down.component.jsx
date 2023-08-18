import { CartDropDownContainer, CartItemContainer, EmptyMessage } from "./cart-drop-down.style.jsx";
import Button, { Button_Types } from "../Button/buttton.component"
import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

import CartItem from "../Cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropDown = () => {
    const { cartItems, setIsCartOpen } = useContext(CartContext);


    return (
        <CartDropDownContainer>
            <CartItemContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <EmptyMessage className='empty-message'>Your cart is empty</EmptyMessage>
                )}
            </CartItemContainer>
            <Link to="/checkout">
                <Button buttonType={Button_Types.base} onClick={() => setIsCartOpen(false)}>Checkout</Button>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;