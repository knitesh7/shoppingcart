import { useState, createContext,useContext } from "react";

export const counterContext = createContext(null)

export const useCounter = ()=>{
    return useContext(counterContext)
}

export const CounterEnvironment = (props) => {
    const [count, setCount] = useState(0)
    return (
        <counterContext.Provider value={{ count, setCount}}>
            {props.children}
        </counterContext.Provider>
    )
}



