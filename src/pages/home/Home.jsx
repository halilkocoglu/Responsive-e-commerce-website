import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./home.css"
import Products from '../../components/products/Products'
function Home() {
  return (
    <div className='home-container'>
        <Navbar/>
        <Products />
    </div>
  )
}

export default Home