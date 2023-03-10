import { createContext, useState } from "react";

export const LoggedContext = createContext()

export const LoggedProvider = ({ children }) => {
    const [ hasUser, setHasUser ] = useState(false)
    const [ show, setShow ] = useState(false);
    const [ myPass, setMyPass ] = useState(false)
    
    return (
        <LoggedContext.Provider value={{ hasUser, setHasUser, show, setShow, myPass, setMyPass }}>
            {children}
        </LoggedContext.Provider>
    )
}