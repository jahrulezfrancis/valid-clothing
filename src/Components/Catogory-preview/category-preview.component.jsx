import "./category-preview.style.scss";
import ProductsCard from "../Product-Card/product-card.compnonent";

const CategoryPreview = ({ title, products }) => {
    return (
        <div className="category-preview-container">
            <h2>
                <span className="title">{title.toUpperCase()}</span>
            </h2>
            <div className="preview">
                {products.filter((_, idx) => idx < 4).map((product) => <ProductsCard products={product} />)}
            </div>
        </div>
    )
}
export default CategoryPreview;