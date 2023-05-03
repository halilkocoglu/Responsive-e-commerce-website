import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import SlideImage from '../../components/slideImage/SlideImage'
 
function ProductDetail() {
    const {productId} = useParams()
    const [singleProductData, setSingleProductData] = useState([]);

    useEffect (() => {
        axios.get(`https://dummyjson.com/products/${(productId)}`)
        .then(res => res.data)
        .then(data => setSingleProductData(data))
    },[productId])
  return (
    <div className='productDetail-container'>
        <Navbar/>
        <div className='productDetail-section'>
            <div className='right'>
                {   
                        console.log(singleProductData)
                }
                <SlideImage value = {singleProductData.images}/>
            </div>
            <div className="left">

            </div>
        </div>
    </div>
  )
}

export default ProductDetail