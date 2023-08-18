import {CartItemContainer, NameContainer, ItemDetailContainer} from "./cart-item.style";


const CartItem = ({ cartItem }) => {
    const { name, price, quantity, imageUrl } = cartItem;
    return (
        <CartItemContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetailContainer>
                <NameContainer>{name}</NameContainer>
                <span className='price'>
                    {quantity} x ${price}
                </span>
            </ItemDetailContainer>
        </CartItemContainer>
    )
}

export default CartItem;