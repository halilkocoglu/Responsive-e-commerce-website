import React, { useEffect, useState } from 'react'
import "./productDetail.css"
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SlideImage from '../../components/slideImage/SlideImage'
import { useBasketContext } from '../../contexts/basketContext/BasketContext'

function ProductDetail() {
    const {productId} = useParams()
    const [singleProductData, setSingleProductData] = useState([null]);
    const {  addToBasket, basketList } = useBasketContext() 
    const handleClick = (product) => {
        addToBasket( product )
    }

    useEffect (() => {
        axios.get(`https://dummyjson.com/products/${(productId)}`)
        .then(res => res.data)
        .then(data => setSingleProductData(data))
    },[productId])
    return (
    <div className='productDetail-container'>
        <Navbar/>
        {singleProductData.title===undefined 
            ?<div className='loading'>Loading...</div>
            :
        <div className='productDetail-section'>
            <div className='left'>
                <SlideImage value = {singleProductData.images}/>
            </div>
            <div className="productDetail-section_right">
                <h1>{singleProductData.title}</h1>
                <div className="productDetail-section_right-info">
                    <h3>{singleProductData.brand}</h3>
                    <p>{singleProductData.description}</p>
                    <div>
                        <h3>{`$ ${singleProductData.price}`}</h3>
                        <h3>{<span>&#11088; {singleProductData.rating}</span>}</h3>
                    </div>
                    <div className='btn'>
                        <p>In Stock : {singleProductData.stock}</p>
                        <button
                            onClick= {() => handleClick(singleProductData)}
                            >
                                {   
                                    basketList.includes(singleProductData)
                                    ? "Remove from Cart"
                                    : "Add to Cart"
                                }
                        </button>
                    </div>
                </div>
            </div>
        </div>}
    </div>
)
}

export default ProductDetail