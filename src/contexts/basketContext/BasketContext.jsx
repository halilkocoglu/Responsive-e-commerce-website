import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const [basketList, setBasketList] = useState(
        localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems")) 
        : [] )

    const addToBasket = (data) => {
        if(!basketList.includes(data)) {
            return setBasketList(( prev ) => [ data, ...prev ])
        } 
        const filtered = basketList.filter( ( item ) => item.id !== data.id)
        setBasketList(filtered)        
    }
    const deleteFromCart = (data) => {
        const filtered = basketList.filter( ( item ) => item.id !== data.id)
        setBasketList(filtered) 
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(basketList))
        basketList.length === 0  && localStorage.removeItem("cartItems") 
        console.log(basketList);
    },[basketList])

    const values = {
        basketList,
        addToBasket,
        deleteFromCart,
    }
    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}


const useBasketContext = () => useContext(BasketContext)


export {
    useBasketContext,
    BasketProvider,
}