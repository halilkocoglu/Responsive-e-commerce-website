import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'
import { useBasketContext } from '../../contexts/basketContext/BasketContext'
function Card({data}) {
    const {selectedCategory} = useProductsContext()
    const {  addToBasket } = useBasketContext() 

    const handleClick = (product) => {
        addToBasket( product )
    }

  return (
    <div className='card-container'>
        {
            data.map((product) => {
                // All products
                if(selectedCategory === null ){return (
                    <div className='card' key={product.id}>
                        <div className='card-img'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                            </Link>
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link to={`/products/${product.id}`}>
                                <div>{product.title}</div>
                                <div>{product.brand}</div>
                                </Link>
                            </div>
                            <div className='card-info'>
                                <div>
                                    <div>${product.price}</div>
                                    <div>
                                        <button
                                        onClick= {() => handleClick(product)}
                                        >
                                            Add to Card</button>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )}
                // products with specific categories
                return (
                    product.category === selectedCategory &&
                    <div className='card' key={product.id}>
                        <div className='card-img'>
                            <Link to={`/products/${product.id}`}>
                                <img src={product.thumbnail} alt={product.title} />
                            </Link>
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link to={`/products/${product.id}`}>
                                <div>{product.title}</div>
                                <div>{product.brand}</div>
                                </Link>
                            </div>
                            <div className='card-info'>
                                <div>
                                    <div>${product.price}</div>
                                    <div><button>Add to Card</button></div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Card
