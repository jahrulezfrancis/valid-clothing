import CategoryPreview from "../../Catogory-preview/category-preview.component";
import { CategoriesSelector } from "../../Store/Categories/categories.selector";
import { useSelector } from "react-redux";
import { CategoryPreviewContainer } from "./category-preview.styles";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(CategoriesSelector)

    return (
        <CategoryPreviewContainer>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </CategoryPreviewContainer>
    )
};

export default CategoriesPreview;