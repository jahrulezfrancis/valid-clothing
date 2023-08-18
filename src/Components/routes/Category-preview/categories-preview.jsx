import { useContext } from "react";
import { CatogoryContext } from "../../Context/category-context";
import CategoryPreview from "../../Catogory-preview/category-preview.component";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CatogoryContext)
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