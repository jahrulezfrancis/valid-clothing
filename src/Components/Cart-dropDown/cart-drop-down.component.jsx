import "./cart-drop-down.style.scss";
import Button from "../Button/buttton.component"
import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

import CartItem from "../Cart-item/cart-item.component";
import { Link, useNavigate } from "react-router-dom";

const CartDropDown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate()


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
            <Link to="/checkout">
                <Button>Checkout</Button>
            </Link>
        </div>
    )
}

export default CartDropDown;