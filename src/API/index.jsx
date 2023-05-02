import axios from "axios"

const fetchAllProducts = (callback) => {
    axios.get('https://dummyjson.com/products')
    .then(res => res.data)
    .then(data => data.products)
    .then(res => callback(res))
}





export {
    fetchAllProducts,
}