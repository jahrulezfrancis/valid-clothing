import { CartIconContainer, ItemCountContainer, ShopingIconContainer } from "./cart-icon.styles"
import { useContext } from "react";
import { CartContext } from "../Context/cart-context";

const CartIcon = () => {
    const { cartCount, setIsCartOpen, isCartOpen } = useContext(CartContext)
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