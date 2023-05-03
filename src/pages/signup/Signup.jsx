import React from 'react'
import  "./signup.css"
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className='signup-container'>
      <Navbar/>
      <div className='signup-content'>
        <form className='signup-form'>
            <div>
                <div>E-mail</div>
                <input type="text" />
            </div>
            <div>
                <div>Password</div>
                <input type="password" />
            </div>
            <div>
                <div>Password Confirmation</div>
                <input type="password" />
            </div>
        </form>
        <Link>You already have an account? Sign in.</Link>
        <div className='signup-button'>
          <button>Signup </button>
        </div>
      </div>

    </div>
  )
}

export default Signup