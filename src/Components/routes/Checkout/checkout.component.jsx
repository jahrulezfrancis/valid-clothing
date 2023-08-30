import { ReactComponent as EmptyCart } from "../../../Assets/empty-shopping-cart.svg"
import { addItemToCart, removeItemFromCart, clearItemFromCart, } from "../../Store/Cart/cart.slice";
import { CartTable, TableData, RemoveButton, ButtonContainer, EmptyCartContainer, QuantityButton, TableHead, QuantityLabel } from "./checkout.style"
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems, selectCartTotal } from "../../Store/Cart/cart.selector";
import PaymentForm from "../../Payment-form/Payment-form.component";


const CheckoutPage = () => {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const totalPrice = useSelector(selectCartTotal)

    return (
        <div>
            <CartTable>
                <thead>
                    <tr>
                        <TableHead>Products</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Remove</TableHead>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.length > 0 ?
                        (cartItems.map((cartItem) => {
                            const { id, name, imageUrl, quantity, price } = cartItem;
                            return (

                                <tr key={id}>
                                    <TableData><img width='150px' src={imageUrl} alt={`${name}`} /></TableData>
                                    <TableData>{name}</TableData>
                                    <TableData >
                                        <ButtonContainer>
                                            <QuantityButton onClick={() => dispatch(removeItemFromCart(cartItem))}>&#10094;</QuantityButton>
                                            <QuantityLabel>{quantity}</QuantityLabel>
                                            <QuantityButton onClick={() => dispatch(addItemToCart(cartItem))}>&#10095;</QuantityButton>
                                        </ButtonContainer>
                                    </TableData>
                                    <TableData>${price}</TableData>
                                    <TableData>
                                        <RemoveButton onClick={() => dispatch(clearItemFromCart(cartItem))}>X</RemoveButton>
                                    </TableData>
                                </tr>
                            )
                        })) :
                        <tr>
                            <TableData colSpan={5}>
                                <EmptyCartContainer>
                                    <EmptyCart width='200px' height='auto' />
                                    <h3>Your cart is empty, please go to shop page and add more products</h3>
                                </EmptyCartContainer>
                            </TableData>
                        </tr>
                    }
                    {cartItems.length > 0 && <tr><TableData rowSpan={2}>{`Total: $${totalPrice}`}</TableData></tr>}
                </tbody>

            </CartTable >
            {cartItems.length > 0 && <PaymentForm />}
        </div>
    )
};
export default CheckoutPage;