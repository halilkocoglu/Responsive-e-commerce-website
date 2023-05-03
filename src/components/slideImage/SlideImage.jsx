import React from 'react'

function SlideImage(props) {
  return (
    <div>
        {   props.value &&
            <img src={props.value[0]} alt="" />
        }
    </div>
  )
}

export default SlideImage