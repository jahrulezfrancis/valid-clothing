import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import { ReactComponent as EmptyCart } from "../../../Assets/empty-shopping-cart.svg"
import "./checkout.style.scss"


const CheckoutPage = () => {
    const { cartItems, addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);

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
                                        <span onClick={() => removeItemFromCart(cartItem)} className="quantity-btn">{'<'}</span>
                                        {quantity}
                                        <span onClick={() => addItemToCart(cartItem)} className="quantity-btn">{'>'}</span>
                                    </div>
                                </td>
                                <td>${price}</td>
                                <td>
                                    <button onClick={() => clearItemFromCart(cartItem)}>X</button>
                                </td>
                            </tr>
                        )
                    })) :
                    <td colSpan={5}>
                        <div className="empty-cart-container">
                            <EmptyCart width='200px' height='auto' />
                            <h3>Your cart is empty, please go to shop page and add more products</h3>
                        </div>
                    </td>
                }
            </tbody>
        </table>


        // cartItems.map(({ name, imageUrl, quantity, price }) => {
        //     return (

        //         <div className="checkout-page-container">
        //             <img src={imageUrl} alt={`${name}`} />
        //             <div className='item-details'>
        //                 <span className='name'>{name}</span>
        //                 <span className='price'>
        //                     {quantity} x ${price}
        //                 </span>
        //             </div>
        //         </div>
        //     )
        // })

    )
};
export default CheckoutPage;