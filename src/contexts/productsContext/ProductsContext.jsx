import { createContext, useContext, useEffect, useState } from "react";
import { fetchAllProducts, fetchProductsCategories } from "../../API"


const ProductsContext = createContext();


const ProductsProvider = ({children}) => {
    const [productsData, setProductsData] = useState([]);
    const [productsCategories, setProductsCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    useEffect( () => {
        fetchAllProducts(setProductsData)
        fetchProductsCategories(setProductsCategories)
    },[])
    const values = {
        productsData,
        productsCategories,
        selectedCategory,
        setSelectedCategory,
    }
    return <ProductsContext.Provider value={values}>{children}</ProductsContext.Provider>
}


const useProductsContext = () => useContext(ProductsContext)

export {
    useProductsContext,
    ProductsProvider
}