import { Fragment } from "react";
import CategoriesPreview from "../Category-preview/categories-preview";
import { Route, Routes } from "react-router-dom";
import Category from "../Category/Category.component";

const ShopPage = () => {
    return (
        <Fragment>
            <Routes>
                <Route index element={<CategoriesPreview />} />
                <Route path=":category" element={<Category />} />
            </Routes>
        </Fragment>
    )
};

export default ShopPage;