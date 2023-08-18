import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import { ReactComponent as EmptyCart } from "../../../Assets/empty-shopping-cart.svg"
import { CartTable, TableData, RemoveButton, ButtonContainer, EmptyCartContainer, QuantityButton, TableHead, QuantityLabel } from "./checkout.style"


const CheckoutPage = () => {
    const { cartItems, totalPrice, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    return (
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
                                        <QuantityButton onClick={() => removeItemFromCart(cartItem)}>&#10094;</QuantityButton>
                                        <QuantityLabel>{quantity}</QuantityLabel>
                                        <QuantityButton onClick={() => addItemToCart(cartItem)}>&#10095;</QuantityButton>
                                    </ButtonContainer>
                                </TableData>
                                <TableData>${price}</TableData>
                                <TableData>
                                    <RemoveButton onClick={() => clearItemFromCart(cartItem)}>X</RemoveButton>
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
    )
};
export default CheckoutPage;