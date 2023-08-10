import "./cart-drop-down.style.scss";
import Button from "../Button/buttton.component"

const CartDropDown = () => {
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items" />
            <Button>Checkout</Button>
        </div>
    )
}

export default CartDropDown;