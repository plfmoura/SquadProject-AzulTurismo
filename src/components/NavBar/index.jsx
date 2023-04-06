import React, { useContext } from "react";
import { Link } from "react-router-dom";
import style from "./navBar.module.css";
import { IoNotifications } from "react-icons/io5";
import Modal from "../Modal";
import SingIn from "../../pages/SingIn";
import { LoggedContext } from "../../context/LoggedContext";
import BurgerMobileMenu from "./BurgerMobileMenu";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delUser } from "../../reducer/userReducer";
import { NavBarContext } from "../../context/NavBarContext";
import MobileUser from "./MobileUser";

export default function NavBar() {
  const state = useSelector((state) => state);
  const { user } = state.user;
  const { show, setShow, change, setChange } = useContext(LoggedContext);
  const {
    changeBgColor,
    changeColor,
    changeNotficationIcon,
    changeLogoColor,
    newNotification,
    userNavBarBorder
  } = useContext(NavBarContext);
  const dispatch = useDispatch();

  return (
    <>
      {show && (
        <Modal
          setShow={setShow}
          children={<SingIn setShow={setShow} change={change} />}
        />
      )}

      <div className={style.alignContent} style={changeBgColor}>
        <div className={style.navBarContainer}>
          <div className={style.logoAlign}>
            <img
              src="azul.png"
              alt="Logo da empresa Azul Turismo"
              className={style.navBarLogo}
            />
            <span style={{ color: changeLogoColor }}>AZUL TOUR</span>
          </div>
          <nav className={style.menuContainer}>
            <ul className={style.menuContent}>
              <li>
                <Link style={{ color: changeColor }} to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link style={{ color: changeColor }} to="/services">
                  Serviços
                </Link>
              </li>
              <li>
                <Link style={{ color: changeColor }} to="/about">
                  Sobre nós
                </Link>
              </li>
            </ul>
          </nav>
          <div className={style.userContainer}>
            <ul className={style.menuContent}>
              {user ? (
                <>
                  <div style={{boxShadow: userNavBarBorder}}>
                    <Link
                      style={{ color: changeColor }}
                      className={style.notificationAlign}
                      to="/profile"
                    >
                      <IoNotifications
                        className={style.notificationIcon}
                        style={{ color: changeNotficationIcon }}
                      />
                      {newNotification && (
                        <label className={style.newPurchase}>1</label>
                      )}
                    </Link>
                    <Link style={{ color: changeColor }} to="/profile">
                      <img
                        src={user.image_profile}
                        className={style.userPicture}
                      />
                    </Link>
                  </div>
                  <li
                    onClick={() => {
                      dispatch(delUser());
                      localStorage.removeItem("token");
                    }}
                  >
                    <Link style={{ color: changeColor }} to="/">
                      Sair
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li
                    onClick={() => {
                      setShow(true);
                      setChange(false);
                    }}
                  >
                    <Link style={{ color: changeColor }}>Entrar</Link>
                  </li>
                  <div style={{
                        color: changeColor,
                        display: "grid",
                        placeContent: "center",
                        background: "#fff",
                        borderRadius: 100,
                        display: "grid",
                        placeContent: "center",
                        width: "2.8rem",
                        height: "2.8rem",
                        border: '1px solid #33333330' 
                      }}>
                    
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU"
                        alt="Imagem de Perfil do usuário"
                        className={style.userPicture}
                      />
                  </div>
                </>
              )}
            </ul>
          </div>
          <BurgerMobileMenu callMenu={style.menuMobile} />
        </div>
      </div>
    </>
  );
}
