import React from "react";
import { IoNotifications } from "react-icons/io5";
import "./mobileUser.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { NavBarContext } from "../../../context/NavBarContext";
import { useNavigate } from "react-router-dom";

export default function MobileUser({ userName, userPicture }) {
  const [showContent, setShowContent] = useState(true);
  const { changeBgColor, changeColor } = useContext(NavBarContext);
  const navigate = useNavigate();
  
  const showLoggedUser = () => {
    setTimeout(() => {
      setShowContent(!setShowContent);
    }, [10000]);
  };

  useEffect(() => {
    showLoggedUser();
  }, []);

  return (
    <>
      {showContent && (
        <div className="Mobile-user-greetings-container" style={changeBgColor}>
          <span style={{ color: changeColor }}>Olá, {userName}!</span>
          <div onClick={() => navigate('/profile')}>
            <IoNotifications
              className="notifications-icon-mobile-user"
              style={{ color: changeColor }}
            />
            <img src={userPicture} />
          </div>
        </div>
      )}
    </>
  );
}
