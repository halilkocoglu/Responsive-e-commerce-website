import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useProductsContext } from '../../contexts/productsContext/ProductsContext';

function Navbar() {
    const { setSelectedCategory } = useProductsContext()
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='logo'>
                <Link 
                to={"/"}
                onClick={() =>setSelectedCategory(null)}
                >E-Commerce</Link>
            </div>
            <div>
                <Link 
                to={"/"}
                onClick={() =>setSelectedCategory(null)}
                >Products</Link>
            </div>
        </div>
        <div className='right'>
            <div className='basket-logo'>
                <Link >
                    <SlBasket />
                </Link>
            </div>
            <div><Link to={"/signup"}>Login</Link></div>
        </div>
        

    </div>
  )
}

export default Navbar