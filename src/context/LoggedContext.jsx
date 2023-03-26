import { createContext, useState } from "react";

export const LoggedContext = createContext()

export const LoggedProvider = ({ children }) => {
    const [ hasUser, setHasUser ] = useState(false)
    const [ show, setShow ] = useState(false);
    const [ change, setChange ] = useState(false)
    
    show ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'

    return (
        <LoggedContext.Provider value={{ hasUser, setHasUser, show, setShow, change, setChange }}>
           {children}
        </LoggedContext.Provider> 
    )
}