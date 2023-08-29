import { CartIconContainer, ItemCountContainer, ShopingIconContainer } from "./cart-icon.styles"
import { setIsCartOpen } from "../Store/Cart/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import { selectCartCount, selectIsCartOpen } from "../Store/Cart/cart.selector";

const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()

    const toggleCart = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <CartIconContainer onClick={toggleCart}>
            <ShopingIconContainer />
            <ItemCountContainer>{cartCount}</ItemCountContainer>
        </CartIconContainer>
    )
}
export default CartIcon;