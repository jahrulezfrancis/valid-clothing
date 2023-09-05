import { Container,FooterContainer, BottomElements, CardButton } from "./product-card"
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
                <span>Product: {name}</span>
                <BottomElements>
                    <span> ${price}</span>
                    <CardButton onClick={addProducts}>Add to cart</CardButton>
                </BottomElements>
            </FooterContainer>
        </Container>
    )
}

export default ProductsCard;