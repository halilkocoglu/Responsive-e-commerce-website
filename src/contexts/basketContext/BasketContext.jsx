import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import { createContext } from "react"

const BasketContext = createContext()

const BasketProvider = ({ children }) => {
    const [basketList, setBasketList] = useState([])

    const addToBasket = (data) => {
        setBasketList(( prev ) => [ ...prev,data ])
    }

    useEffect(() => {
        console.log(basketList);
    },[basketList])

    const values = {
        basketList,
        addToBasket,
    }
    return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}


const useBasketContext = () => useContext(BasketContext)


export {
    useBasketContext,
    BasketProvider,
}