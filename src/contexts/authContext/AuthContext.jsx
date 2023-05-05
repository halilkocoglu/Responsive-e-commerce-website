import { createContext, useContext, useEffect, useState } from "react";



const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const login = (data) => {
        setIsLoggedIn(true)
        setUser(data)
    }
    useEffect(()=> {

    },[])
    const values = {
        user,
        isLoggedIn,
        login,
    }
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider> 
}

const useAuthContext = () => useContext(AuthContext)

export {
    useAuthContext,
    AuthProvider, 
}