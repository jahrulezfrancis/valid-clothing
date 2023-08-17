import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CatogoryContext } from "../../Context/category-context";
import ProductsCard from "../../Product-Card/product-card.compnonent";
import "./Category.style.scss"

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CatogoryContext);
    const [products, setProducts] = useState([])


    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])

    return (
        <div className="dynamic-category-container">
            {products && products.map((product) => <ProductsCard key={product.id} products={product} />)}
        </div>
    )
}


export default Category;
