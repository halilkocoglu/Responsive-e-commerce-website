import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import Products from '../../components/products/Products'
import Categories from '../../components/categories/Categories'
function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <div className='home-container_main'>
          <Categories />
          <Products />
        </div>
    </div>
  )
}

export default Home