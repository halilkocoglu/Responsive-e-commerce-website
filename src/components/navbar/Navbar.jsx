import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";

function Navbar() {
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='logo'>
                <Link to={"/"}>E-Commerce</Link>
            </div>
            <div>
                <Link to={"/"}>Products</Link>
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