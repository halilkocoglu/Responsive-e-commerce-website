import { createContext, useContext, useState } from "react";
import { useBasketContext } from "../basketContext/BasketContext";
import { fetchAddCart, fetchGetCartOfUser } from "../../API"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const { setBasketList, basketList } = useBasketContext()
    const [user, setUser] = useState(
        localStorage.getItem('user') ? 
        JSON.parse(localStorage.getItem('user')) :
        null
    )
    const [isLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('isLoggedIn') 
        ? localStorage.getItem('isLoggedIn')
        : false)

    const login = async (data) => {
        setIsLoggedIn(true)
        localStorage.setItem('isLoggedIn',true)
        setUser(data)
        localStorage.setItem("user", JSON.stringify(data))
        //add user's basket
        if(basketList.length > 0) {
            basketList.map (async (basket) =>{
                try {
                    const addCartReponse = await fetchAddCart({userId:data.id, products:[{id: basket.id}]})
                    //dummy data add
                    console.log(addCartReponse);
                } catch (e) {
                    console.log(e.response.data.message);
                }
            })
        }
        try {
            //in fetchGetCartOfUser api call, dummy data not have any id or img. 
            //a small bug occur when u try to add an item that you already have in your api
            //also, the api call not have product img. If you wanna try to login as a dummy user(in 'https://dummyjson.com/users/1') u can see products in your basket have no img
            const getCartOfUser = await fetchGetCartOfUser(data.id) 
            var cartItems = getCartOfUser.carts[0].products;
            if(localStorage.getItem("cartItems")){
                var localCartItems = [...JSON.parse(localStorage.getItem("cartItems"))]
                cartItems = localCartItems.concat(cartItems)
            }            
            setBasketList( cartItems)
            
        } catch (e) {
            console.log(e.message);
        }


    }
    const logout = () => {
        // console.log(isLoggedIn);
        setIsLoggedIn(false)
        setUser(null)
        localStorage.removeItem('isLoggedIn')
        localStorage.removeItem('user')
        //Reset Basket
        setBasketList([])
        localStorage.getItem('cartItems') && localStorage.removeItem('cartItems')
        
    }


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