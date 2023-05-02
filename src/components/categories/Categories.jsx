import React from 'react'
import "./categories.css"
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'
import { Link } from 'react-router-dom'

function Categories() {
    const { productsCategories, setSelectedCategory } = useProductsContext()
  return (
    <div className='categories-container'>
        <h1>Categories</h1>
        {
            productsCategories.map((category,key) => {
                return (
                    <div className='category-list' key={key}>
                        <Link 
                        onClick={() => {
                            setSelectedCategory(category);
                        }}>
                        {category}
                        </Link>
                    </div>
                )
            })
        }

    </div>
  )
}

export default Categories