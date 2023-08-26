import { Fragment, useEffect } from "react";
import CategoriesPreview from "../Category-preview/categories-preview";
import { Route, Routes } from "react-router-dom";
import Category from "../Category/Category.component";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Utils/Firebase/firebase.utils";
import { SetCategories } from "../../Store/Categories/categories.action";

const ShopPage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategories('categories')
            dispatch(SetCategories(categoriesArray))
        }
        getCategoriesMap()
    }, [dispatch])

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