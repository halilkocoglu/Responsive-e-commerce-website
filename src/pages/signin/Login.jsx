import React from 'react'
import  "../signup/signup.css"
import Navbar from '../../components/navbar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import validationSchema from './validations'
import { fetchLogin } from '../../API'
import { useAuthContext } from '../../contexts/authContext/AuthContext'



function Login() {
  const navigate = useNavigate()
  const { login } = useAuthContext()
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema,
    onSubmit : async (values, bag) => {
    // Post method Adding a new user will not add it into the server.
    // It will simulate a POST request and will return the new created user with a new id
      try {
        // you can see the response on console
        const loginResponse = await fetchLogin({username: values.username, password: values.password})
        console.log(loginResponse);
        login(loginResponse)
        navigate('/')
      } 
      // Normally this block will catch any errors if the user has already been registered
      // But in this case, no error will come up cause of we just simulate to 'add a new  user'
      catch (error) {
        bag.setErrors( {general: error.response.data.message})
      }
    } 
  })

  return (
    <div className='signup-container'>
      <Navbar/>
      <div className='signup-content'>
        <div className="signup-error">
          { 
            formik.errors.general && (
              <div className="error">
                {
                  formik.errors.general
                }
              </div>
            )
          }
        </div>
        <form 
        className='signup-form'
        onSubmit={formik.handleSubmit}
        >
            <div>
                <div>Username</div>
                <input 
                className= {`${formik.touched.username && formik.errors.username 
                  ? "border-red" :""}`}
                name='username'
                type="text" 
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
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
            <div className='signup-button'>
              <button type='submit'>Login</button>
            </div>
        </form>
            <Link to={"/signup"}>You do not have an account? Sign Up.</Link>
      </div>

    </div>
  )
}

export default Login