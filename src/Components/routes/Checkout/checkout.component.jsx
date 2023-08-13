import { useContext } from "react";
import { CartContext } from "../../Context/cart-context";
import "./checkout.style.scss"


const CheckoutPage = () => {
    const { cartItems } = useContext(CartContext);
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
                {cartItems.map(({ id, name, imageUrl, quantity, price }) => (
                    <tr key={id}>
                        <td><img width='150px' src={imageUrl} alt={`${name}`} /></td>
                        <td>{name}</td>
                        <td>
                            <span className="quantity-btn">{'<'}</span> {quantity}  <span>{'>'}</span>
                        </td>
                        <td>${price}</td>
                        <td>
                            <button>X</button>
                        </td>
                    </tr>
                ))}
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