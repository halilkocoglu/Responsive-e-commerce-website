import React, { useEffect, useState } from 'react'
import "./slideImg.css"
import { Link } from 'react-router-dom'

function SlideImage(props) {
  const [imgIndex, setImgIndex] = useState(0)
  useEffect(() => {
    if ( props.value && 
      (imgIndex > props.value.length - 1 || imgIndex < 0)) {
      setImgIndex(0)
    }
  },[imgIndex, props])
  return (
    <div className='img-slider'>
        {   props.value &&
        <>
          <div className='slider'>
            <img src={props.value[imgIndex]} alt="" />
            <Link 
            onClick={() => setImgIndex(imgIndex - 1)}
            className='prev'>
              &#171;
            </Link>
            <Link 
            onClick={() => setImgIndex(imgIndex + 1)}
            className='next'>
              &#187;
            </Link>
          </div>
            <div className='dots-container'>
              {
                props.value.map((img,i) => {
                  return(
                    <div className='dots' key={i} style={{textAlign : "center"}}>
                      <div className={`dot ${i===imgIndex ? "active":""}`}></div>
                    </div>
                  )
                })
              }
            </div>
          </>
        }
    </div>
  )
}

export default SlideImage