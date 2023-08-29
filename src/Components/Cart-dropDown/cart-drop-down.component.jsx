import { CartDropDownContainer, CartItemContainer, EmptyMessage } from "./cart-drop-down.style.jsx";
import Button, { Button_Types } from "../Button/buttton.component"
import CartItem from "../Cart-item/cart-item.component";
import { Link } from "react-router-dom";
import { setIsCartOpen } from "../Store/Cart/cart.slice.js";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../Store/Cart/cart.selector.js";

const CartDropDown = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems);
    const closeCart = () => dispatch(setIsCartOpen(false));

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
                <Button buttonType={Button_Types.base} onClick={closeCart}>Checkout</Button>
            </Link>
        </CartDropDownContainer>
    )
}

export default CartDropDown;