import { createContext, useContext, useState } from "react";

const MLContext = createContext()

const Context = ({children}) => {
    const [total, setTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    return (
        <MLContext.Provider
            value={{
                total, 
                setTotal, 
                cantidad, 
                setCantidad
            }}
        >
            {children}
        </MLContext.Provider>
    )
}
export default Context

export const useMLContext = () => {
    return useContext(MLContext)
}