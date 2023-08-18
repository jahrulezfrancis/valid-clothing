import { useContext, useCallback } from "react";
import Button, { Button_Types } from "../Button/buttton.component";
import {Container, NameContainer, PriceContainer, FooterContainer} from "./product-card"
import { CartContext } from "../Context/cart-context";

const ProductsCard = ({ products }) => {
    const { name, imageUrl, price } = products;
    const { addItemToCart } = useContext(CartContext)



    const addProducts = useCallback(() => {
        addItemToCart(products);
    }, [addItemToCart, products]);

    return (
        <Container>
            <img src={imageUrl} alt={`${name}`} />
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </FooterContainer>
            <Button onClick={addProducts} buttonType={Button_Types.inverted}>Add to Cart</Button>
        </Container>
    )
}

export default ProductsCard;