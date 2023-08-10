import Button from "../Button/buttton.component";
import "./product-card.scss"

const ProductsCard = ({ products }) => {
    const {name, imageUrl, price } = products;
    return (
        <div className="products-card-container">
            <img src={imageUrl} alt={`${name}`} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType='inverted'>Add to Cart</Button>
        </div>
    )
}

export default ProductsCard;