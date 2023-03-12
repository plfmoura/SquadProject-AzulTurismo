import { createContext, useState } from "react";

export const NavBarContext = createContext() 

export const NavBarProvider = ({children}) => {
    const [ bgColor, setBgColor ] = useState(false)

    let changeBgColor = bgColor ? '#fff' : '#ffffff00'
    let changeColor = bgColor ? '#333' : '#fff'

    return (
        <NavBarContext.Provider value={{ setBgColor, changeColor, changeBgColor }}>
           {children}
        </NavBarContext.Provider> 
    )
}


