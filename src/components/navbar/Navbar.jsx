import React, { useEffect, useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { SlBasket } from "react-icons/sl";
import { useProductsContext } from '../../contexts/productsContext/ProductsContext';
import { AiOutlineMenuFold } from "react-icons/ai";

function Navbar() {
    const [isActive , setIsActive] = useState(false);
    const [menuStyle, setMenuStyle] = useState("");
    const { setSelectedCategory } = useProductsContext();
    useEffect( () => {
        isActive ? setMenuStyle("") : setMenuStyle("display-none")
        
    },[isActive])
  return (
    <div className='navbar'>
        <div className='left'>
            <div className='logo'>
                <Link 
                to={"/"}
                onClick={() =>setSelectedCategory(null)}
                >E-Commerce</Link>
            </div>
            <div className='products'>
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
            <div className='signup'><Link to={"/signup"}>Login</Link></div>
            <div className='menu'>
                <Link onClick={() => {
                    isActive ? setIsActive(false) : setIsActive(true)
                }}> 
                    <AiOutlineMenuFold/>
                </Link>
                <div className={ `${menuStyle} menu-bar` }>
                    <div className='menu'>
                        <Link to={"/"}>Home</Link>
                    </div>
                    <div className='basket-logo menu'>
                        <Link >
                        <span className='padding_right'>Basket</span> <SlBasket />
                        </Link>
                    </div>
                    <div className='menu'>
                        <Link >Categories</Link>
                    </div>
                    <div className='menu'>
                        <Link >Profile</Link>
                    </div>
                    <div className='signup menu'>
                        <Link to={"/signup"}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
        

    </div>
  )
}

export default Navbar