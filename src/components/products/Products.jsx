import React from 'react'
import "./products.css"
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'
import Card from '../card/Card'

function Products() {
    const {productsData} = useProductsContext()
  return (
    <div className='products-container'>
        Categories

       <Card data={productsData}/>
    </div>
  )
}

export default Products