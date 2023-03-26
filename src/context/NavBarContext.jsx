import { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState(false);
  const [paymentFooter, setPaymentFooter] = useState(false);
  const [showOffCanvas, setShowOffCanvas] = useState(false)

  const handleScrollableCheck = ( check ) => {
    check ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'auto'
  }

  handleScrollableCheck(showOffCanvas)

  let alignPaymentShotcuts = paymentFooter ? 'center' : 'space-between'
  let changeBgColor = bgColor
    ? { backgroundColor: "#fff", fontWeight: "500" }
    : {
        backgroundColor: "#ffffff55",
        fontWeight: "500",
        backdropFilter: "blur(5px)",
      };
  let changeColor = bgColor ? "#333" : "#fff";
  let changeNotficationIcon = bgColor ? "#333" : "#fff";

  return (
    <NavBarContext.Provider
      value={{
        setBgColor,
        changeColor,
        changeBgColor,
        changeNotficationIcon,
        paymentFooter,
        setPaymentFooter,
        alignPaymentShotcuts,
        showOffCanvas,
        setShowOffCanvas,
        handleScrollableCheck
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
