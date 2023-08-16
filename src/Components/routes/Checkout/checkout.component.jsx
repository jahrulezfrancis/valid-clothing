import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import { ReactComponent as EmptyCart } from "../../../Assets/empty-shopping-cart.svg"
import "./checkout.style.scss"


const CheckoutPage = () => {
    const { cartItems, totalPrice, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

    return (
        <table className="cart-table">
            <thead>
                <tr>
                    <th>Products</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {cartItems.length > 0 ?
                    (cartItems.map((cartItem) => {
                        const { id, name, imageUrl, quantity, price } = cartItem;
                        return (

                            <tr key={id}>
                                <td><img width='150px' src={imageUrl} alt={`${name}`} /></td>
                                <td>{name}</td>
                                <td >
                                    <div className="btn-container">
                                        <span onClick={() => removeItemFromCart(cartItem)} className="quantity-btn">&#10094;</span>
                                        <span className="quantity">{quantity}</span>
                                        <span onClick={() => addItemToCart(cartItem)} className="quantity-btn">&#10095;</span>
                                    </div>
                                </td>
                                <td>${price}</td>
                                <td>
                                    <button onClick={() => clearItemFromCart(cartItem)}>X</button>
                                </td>
                            </tr>
                        )
                    })) :
                    <tr>
                        <td colSpan={5}>
                            <div className="empty-cart-container">
                                <EmptyCart width='200px' height='auto' />
                                <h3>Your cart is empty, please go to shop page and add more products</h3>
                            </div>
                        </td>
                    </tr>
                }
                <tr>
                    <td rowSpan={2}>{`Total: $${totalPrice}`}</td>
                </tr>
            </tbody>


        </table >
    )
};
export default CheckoutPage;