import { useContext } from "react"
import { CartIconContainer, ItemCountContainer, ShopingIconContainer } from "./cart-icon.styles"
import { CartContext } from "../Context/cart-context"

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen } = useContext(CartContext);
    const { cartCount } = useContext(CartContext)
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShopingIconContainer />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )
}
export default CartIcon;