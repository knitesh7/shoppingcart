import { useState,createContext,useContext } from "react";

const cartContext = createContext(null)

export const useCartState = ()=>{
    return useContext(cartContext)
}

export const CartEnvironment = (props)=>{
    const [cartItems,setCartItems] = useState([])
    return(
        <cartContext.Provider value={{cartItems,setCartItems}}>{props.children}</cartContext.Provider>
    )
}