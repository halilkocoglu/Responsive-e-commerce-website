import axios from "axios"
//Products
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
// Login and register
const fetchRegister = async (input) => {
    const {data} = await axios.post('https://dummyjson.com/users/add',input)
    return data;
}

const fetchLogin = async (input) => {
    const {data} = await axios.post('https://dummyjson.com/auth/login',input)
    return data;
} 
// Cart 
const fetchAddCart = async (input) => {
    const {data} = await axios.post('https://dummyjson.com/carts/add',input);
    return data;
}

const fetchDeleteCart = async (input) => {
    const {data} = await axios.delete(`https://dummyjson.com/carts/${input}`);
    return data;
}




export {
    fetchAllProducts,
    fetchProductsCategories,
    fetchRegister,
    fetchLogin,
    fetchAddCart,
    fetchDeleteCart,
}