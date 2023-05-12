import React from 'react'
import { Link } from 'react-router-dom'
//components
import Navbar from '../../components/navbar/Navbar'
//style
import './cart.css'
import cartImage from '../../assets/cart.png'
import { RiDeleteBin2Line } from 'react-icons/ri';
//Context and API
import { useBasketContext } from '../../contexts/basketContext/BasketContext'
import { useAuthContext } from '../../contexts/authContext/AuthContext'
import { fetchDeleteCart } from "../../API" 


function Cart() {
    const { basketList, deleteFromCart } = useBasketContext()
    const { isLoggedIn } = useAuthContext()
    let totalPrice = 0; 

    const handleClick = async (basket) => {
        deleteFromCart(basket)
        if(isLoggedIn) {
            try {
                const addCartReponse = await fetchDeleteCart(basket.id);
                //dummy data add
                console.log(addCartReponse);
            } catch (e) {
                console.log(e.response.data.message);
            }
        }
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