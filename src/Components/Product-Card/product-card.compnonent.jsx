import Button, { Button_Types } from "../Button/buttton.component";
import { Container, NameContainer, PriceContainer, FooterContainer } from "./product-card"
import { addItemToCart } from "../Store/Cart/cart.slice";
import { useDispatch } from "react-redux";

const ProductsCard = ({ products }) => {
    const { name, imageUrl, price } = products;
    const dispatch = useDispatch()


    const addProducts = () => dispatch(addItemToCart(products));


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