import React from 'react'
import { Link } from 'react-router-dom'
import "./card.css"
import { useProductsContext } from '../../contexts/productsContext/ProductsContext'
function Card({data}) {
    const {selectedCategory} = useProductsContext()
  return (
    <div className='card-container'>
        {
            data.map((product) => {
                if(selectedCategory === null ){return (
                    <div className='card' key={product.id}>
                        <div className='card-img'>
                            <Link>
                                <img src={product.thumbnail} alt={product.title} />
                            </Link>
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link>
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
                )}
                return (
                    product.category === selectedCategory &&
                    <div className='card' key={product.id}>
                        <div className='card-img'>
                            <Link>
                                <img src={product.thumbnail} alt={product.title} />
                            </Link>
                        </div>
                        <div className='card-body'>
                            <div className='card-title'>
                                <Link>
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
