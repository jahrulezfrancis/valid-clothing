import { useEffect, useState } from "react";
import { createContext } from "react";
import { getCategories } from "../Utils/Firebase/firebase-.utils";

export const CatogoryContext = createContext({
    categoriesMap: {},
})

export const CategoryProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState([])
    const value = { categoriesMap };
    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategories()
            setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    }, [])

    return (
        <CatogoryContext.Provider value={value}>
            {children}
        </CatogoryContext.Provider>
    )
}