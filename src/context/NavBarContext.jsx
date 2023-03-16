import { createContext, useState } from "react";

export const NavBarContext = createContext() 

export const NavBarProvider = ({children}) => {
    const [ bgColor, setBgColor ] = useState(false)

    let changeBgColor = bgColor ? {backgroundColor:'#fff', fontWeight: '500'} : {backgroundColor: '#ffffff55',fontWeight: '500', backdropFilter: 'blur(5px)'}
    let changeColor = bgColor ? '#333' : '#fff'
    let changeNotficationIcon = bgColor ? '#333' : '#fff'

    return (
        <NavBarContext.Provider value={{ setBgColor, changeColor, changeBgColor, changeNotficationIcon }}>
           {children}
        </NavBarContext.Provider> 
    )
}


