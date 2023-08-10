import { useContext } from "react";
import { ProductContext } from "../../Context/product-context";
import ProductsCard from "../../Product-Card/product-card.compnonent";
import "./shop.style.scss";

const ShopPage = () => {
    const { Products } = useContext(ProductContext)
    return (
        <div className="product-card-container">
            {Products.map((product) => {
                return <ProductsCard key={product.id}  products={product} />
            })}
        </div>
    )
};

export default ShopPage;