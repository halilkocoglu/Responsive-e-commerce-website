import React from 'react'
import  "./signup.css"

function Signup() {
  return (
    <div className='signup-container'>
        <form onSubmit={""}>
            <div>
                <span>E-mail</span>
                <input type="text" />
            </div>
        </form>

    </div>
  )
}

export default Signup