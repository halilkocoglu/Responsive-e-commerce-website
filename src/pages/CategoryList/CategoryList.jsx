import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'
import { Link } from 'react-router-dom'
import "./categoryList.css"
function CategoryList() {
    const { productsCategories, setSelectedCategory } = useProductsContext()

  return (
    <div className='categoryList-container'>
        <Navbar/>
        <div className='categories'>
        <h1>Categories</h1>
        {
            productsCategories.map((category,key) => {
                return (
                    <div className='categories-list' key={key}>
                        <Link to={"/"}
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
    </div>
  )
}

export default CategoryList