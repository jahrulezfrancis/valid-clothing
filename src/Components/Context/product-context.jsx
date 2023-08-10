import { useState } from "react";
import { createContext } from "react";
import ProductData from "../../shop-data.json";

export const ProductContext = createContext({
    Products: [],
})

export const ProductProvider = ({ children }) => {
    const [Products, setProducts] = useState(ProductData)
    const value = { Products, setProducts };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}