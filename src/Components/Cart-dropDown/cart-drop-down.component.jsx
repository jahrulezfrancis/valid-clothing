import "./cart-drop-down.style.scss";
import Button from "../Button/buttton.component"
import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

import CartItem from "../Cart-item/cart-item.component";

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);


    return (
        <div className="cart-dropdown-container">
            <div className='cart-items'>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    ))
                ) : (
                    <span className='empty-message'>Your cart is empty</span>
                )}
            </div>
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropDown;