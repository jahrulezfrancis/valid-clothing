import { CategoryPreviewContainer, PreviewContainer, TitleContainer } from "./category-preview.style.jsx";
import ProductsCard from "../Product-Card/product-card.compnonent";

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <TitleContainer to={title}>{title.toUpperCase()}</TitleContainer>
            </h2>
            <PreviewContainer>
                {products.filter((_, idx) => idx < 4).map((product) => <ProductsCard products={product} />)}
            </PreviewContainer>
        </CategoryPreviewContainer>
    )
}
export default CategoryPreview;