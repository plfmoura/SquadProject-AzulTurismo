import { createContext, useState } from "react";

export const FooterContext = createContext() 

export const FooterProvider = ({children}) => {

    const [flags, setFlags] = useState(true)

    return (
        <FooterContext.Provider value={{flags, setFlags}}>
           {children}
        </FooterContext.Provider> 
    )
}


