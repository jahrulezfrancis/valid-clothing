import { Fragment, useEffect } from "react";
import CategoriesPreview from "../Category-preview/categories-preview";
import { Route, Routes } from "react-router-dom";
import Category from "../Category/Category.component";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Utils/Firebase/firebase.utils";
import { setCategories } from "../../Store/Categories/categories.slice";

const ShopPage = () => {
    const dispatch = useDispatch()
    console.log(process.env.REACT_APP_PAYSTACK_PUB_KEY)

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategories('categories')
            dispatch(setCategories(categoriesArray))
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