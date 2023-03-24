import { createContext, useState } from "react";

export const FooterContext = createContext() 

export const FooterProvider = ({children}) => {

    const [showFlags, setShowFlags] = useState(false)
   

    return (
        <FooterContext.Provider value={{}}>
           {children}
        </FooterContext.Provider> 
    )
}


