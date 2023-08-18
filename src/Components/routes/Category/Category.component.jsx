import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatogoryContext } from "../../Context/category-context";
import ProductsCard from "../../Product-Card/product-card.compnonent";
import { CategoryTitle, CategoryContainer } from "./Category.style"

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CatogoryContext);
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

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
