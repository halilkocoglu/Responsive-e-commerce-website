import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const [basketList, setBasketList] = useState([])

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