import React from 'react'
import  "./signup.css"
import Navbar from '../../components/navbar/Navbar'

function Signup() {
  return (
    <div className='signup-container'>
      <Navbar/>
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