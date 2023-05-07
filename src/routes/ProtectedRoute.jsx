import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../contexts/authContext/AuthContext'

function ProtectedRoute({children}) {
    const { isLoggedIn } = useAuthContext()
  if(!isLoggedIn){
    return <Navigate to={"/"}/>
  }
  return children
  
}

export default ProtectedRoute