import "./cart-item.style.scss";


const CartItem = ({ cartItem }) => {
    const { name, price, quantity } = cartItem;
    console.log(cartItem.quantity)
    return (
        <div className="cart-Item-container">
            <h2>{name}</h2>
            <span>{quantity}</span>
            <span>{quantity} x ${price}</span>
        </div>
    )
}

export default CartItem;