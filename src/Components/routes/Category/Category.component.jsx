import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductsCard from "../../Product-Card/product-card.compnonent";
import { CategoryTitle, CategoryContainer } from "./Category.style"
import { useSelector } from "react-redux";
import { CategoriesSelector } from "../../Store/Categories/categories.selector";

const Category = () => {
    const { category } = useParams();
    const CategoriesMap = useSelector(CategoriesSelector)
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(CategoriesMap[category]);
    }, [category, CategoriesMap])

    return (
        <Fragment>
            <CategoryTitle>{category}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product) => <ProductsCard key={product.id} products={product} />)}
            </CategoryContainer>
        </Fragment>
    )
}


export default Category;
