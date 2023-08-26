import CategoryPreview from "../../Catogory-preview/category-preview.component";
import { CategoriesSelector } from "../../Store/Categories/categories.selector";
import { useSelector } from "react-redux";

const CategoriesPreview = () => {

    const categoriesMap = useSelector(CategoriesSelector)

    return (
        <div className="shop-container">
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products} />
                )
            })}
        </div>
    )
};

export default CategoriesPreview;