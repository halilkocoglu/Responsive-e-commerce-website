import React from 'react'
import './cart.css'
import Navbar from '../../components/navbar/Navbar'
import { useBasketContext } from '../../contexts/basketContext/BasketContext'
import cartImage from '../../assets/cart.png'
import { Link } from 'react-router-dom'
import { RiDeleteBin2Line } from 'react-icons/ri';


function Cart() {
    const { basketList, deleteFromCart } = useBasketContext()
    let totalPrice = 0; 

    const handleClick = (basket) => {
        deleteFromCart(basket)
    }
  return (
    <div className='cart-container'>
        <Navbar />
        <div className='cart-container_section'>
            {
                basketList.length > 0 &&
                basketList.map((basket) => {
                    totalPrice += basket.price
                    
                    return (
                        <div key={basket.id} className='cart-container_cart-section'>
                            <div className='cart-image'>
                                <Link to={`/products/${basket.id}`}>
                                    <img src={basket.thumbnail} alt={basket.title} />
                                </Link>
                            
                            <Link to={`/products/${basket.id}`}>
                                <h3>{basket.title}</h3>
                                <p>{ basket.description }</p>
                                <p>$ {basket.price}</p>
                            </Link>
                            </div>
                            <div className='delete-button'>
                                <Link 
                                onClick={() => handleClick(basket)}
                                >
                                    <RiDeleteBin2Line />
                                </Link>
                            </div>
                        </div>
                    )
                })
            }
            {
                basketList.length === 0 &&
                <div className='cart-container_section-empty-card'>
                    <div className='empty-cart-image'>
                        <img src={cartImage} alt=""  />
                    </div>
                    <div>
                        <p>There is no product to display</p>
                    </div>
                </div>
            }
            <div  
            className={`total-info`}
            style={{ display:basketList.length===0 && 'none' }}  
            >
                <div>
                    Product Amount: {basketList.length}
                </div>
                <div>
                    Total price : ${totalPrice}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cart