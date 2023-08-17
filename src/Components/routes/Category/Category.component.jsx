import { Fragment, useContext, useEffect, useState } from "react";
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
        <Fragment>
            <h2 className="category-title">{category}</h2>
            <div className="category-container">
                {products && products.map((product) => <ProductsCard key={product.id} products={product} />)}
            </div>
        </Fragment>
    )
}


export default Category;
