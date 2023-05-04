import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import Products from '../../components/products/Products'
import Categories from '../../components/categories/Categories'
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'

function Home() {
  const {productsData} = useProductsContext()
  return (
    <div className='home-container'>
        <Navbar/>
        {productsData[0]===undefined 
            ?<div className='loading'>Loading...</div>
            :
        <div className='home-container_main'>
          <Categories />
          <Products />
        </div>}
    </div>
  )
}

export default Home