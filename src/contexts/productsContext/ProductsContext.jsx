import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllProducts } from "../../API"


const ProductsContext = createContext();


const ProductsProvider = ({children}) => {
    const [productsData, setProductsData] = useState([]);

    useEffect( () => {
        fetchAllProducts(setProductsData)
    },[])
    const values = {
        productsData,
    }
    return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}


const useProductsContext = () => useContext(ProductsContext)

export {
    useProductsContext,
    ProductsProvider
}