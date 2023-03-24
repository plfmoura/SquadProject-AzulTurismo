import { createContext, useState } from "react";

export const FooterContext = createContext() 

export const FooterProvider = ({children}) => {

    const [flags, setFlags] = useState(false)

    return (
        <FooterContext.Provider value={{flags, setFlags}}>
           {children}
        </FooterContext.Provider> 
    )
}


