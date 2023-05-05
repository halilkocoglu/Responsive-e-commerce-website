import React from 'react'
import  "./signup.css"
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from './validations'

function Signup() {

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema,
    onSubmit : async (values, bag) => {
      console.log(values);
    } 
  })

  return (
    <div className='signup-container'>
      <Navbar/>
      <div className='signup-content'>
        <form 
        className='signup-form'
        onSubmit={formik.handleSubmit}
        >
            <div>
                <div>E-mail</div>
                <input 
                className= {`${formik.touched.email && formik.errors.email 
                  ? "border-red" :""}`}
                name='email'
                type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                />
            </div>
            <div>
                <div>Password</div>
                <input 
                className= {`${formik.touched.password && formik.errors.password 
                  ? "border-red" :""}`}
                name='password'
                type="password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                />
            </div>
            <div>
                <div>Password Confirm</div>
                <input 
                className= {`${formik.touched.passwordConfirm && formik.errors.passwordConfirm 
                  ? "border-red" :""}`}
                name='passwordConfirm'
                type="password" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.passwordConfirm}
                />
            </div>
            <div className='signup-button'>
              <button type='submit'>Sign Up</button>
            </div>
        </form>
            <Link>You already have an account? Sign in.</Link>
      </div>

    </div>
  )
}

export default Signup