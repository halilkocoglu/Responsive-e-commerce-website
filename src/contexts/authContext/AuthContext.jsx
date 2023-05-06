import { createContext, useContext, useEffect, useState } from "react";



const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(
        localStorage.getItem('user') ? 
        JSON.parse(localStorage.getItem('user')) :
        null
    )
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') 
        ? localStorage.getItem('isLoggedIn')
        : false)

    const login = (data) => {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn',true)
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
    }
    const logout = () => {
        // console.log(isLoggedIn);
        setIsLoggedIn(false)
        setUser(null)
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        
    }

    useEffect(()=> {

    },[])
    const values = {
        user,
        isLoggedIn,
        login,
        logout,
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider> 
}

const useAuthContext = () => useContext(AuthContext)

export {
    useAuthContext,
    AuthProvider, 
}