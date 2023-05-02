import axios from "axios"

const fetchAllProducts = (callback) => {
    axios.get('https://dummyjson.com/products')
    .then(res => res.data)
    .then(data => data.products)
    .then(res => callback(res))
}

const fetchProductsCategories = (callback) => {
    axios.get ('https://dummyjson.com/products/categories')
    .then(res => res.data)
    .then(data => callback(data))
} 





export {
    fetchAllProducts,
    fetchProductsCategories,
}