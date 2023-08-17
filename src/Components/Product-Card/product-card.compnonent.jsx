import { useContext, useCallback } from "react";
import Button, { Button_Types } from "../Button/buttton.component";
import "./product-card.scss"
import { CartContext } from "../Context/cart-context";

const ProductsCard = ({ products }) => {
    const { name, imageUrl, price } = products;
    const { addItemToCart } = useContext(CartContext)



    const addProducts = useCallback(() => {
        addItemToCart(products);
    }, [addItemToCart, products]);

    return (
        <div className="products-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addProducts} buttonType={Button_Types.inverted}>Add to Cart</Button>
        </div>
    )
}

export default ProductsCard;