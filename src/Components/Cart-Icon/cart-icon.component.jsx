import { useContext } from "react"
import { ReactComponent as ShoppingIcon } from "../../Assets/shopping-bag.svg"
import "./cart-icon.styles.scss"
import { CartContext } from "../Context/cart-context"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <div onClick={toggleCart} className="cart-icon-container">
            <ShoppingIcon  className="shopping-icon" />
            <span className="item-count">10</span>
        </div>
    )
}
export default CartIcon;