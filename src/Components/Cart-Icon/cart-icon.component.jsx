import { CartIconContainer, ItemCountContainer, ShopingIconContainer } from "./cart-icon.styles"
import { useDispatch, useSelector } from "react-redux";
import { SelectCartCount, SelectIsCartOpen } from "../Store/Cart/cart.selector";
import { setIsCartOpen } from "../Store/Cart/cart.actions";

const CartIcon = () => {

    const dispatch = useDispatch()
    const isCartOpen = useSelector(SelectIsCartOpen)
    const cartCount  = useSelector(SelectCartCount)
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