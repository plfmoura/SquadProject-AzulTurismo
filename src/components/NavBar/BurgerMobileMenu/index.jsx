import React, { useContext, useEffect, useState } from 'react'
import { LoggedContext } from '../../../context/LoggedContext'
import { useDispatch, useSelector } from 'react-redux'
import { delUser } from '../../../reducer/userReducer'
import SingIn from '../../../pages/SingIn'
import Modal from '../../Modal'
import style from './mobileMenu.module.css'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie-player'
import Burger from '../../../assets/animations/menuIcon.json'
import { IoNotifications } from "react-icons/io5"
import { NavBarContext } from '../../../context/NavBarContext'

export default function BurgerMobileMenu({ callMenu }) {
    const state = useSelector((state) => state);
    const { user } = state.user;
    const dispatch = useDispatch();
    const { handleScrollableCheck } = useContext(NavBarContext)
    
    // Menu burger animation events
    const [ animation, setAnimation] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ disable, setDisable ] = useState(false)

    useEffect(() => {
      handleScrollableCheck(visible)
    }, [visible])

    let disableEvent = disable ? 'none' : 'all'
    let showMenu = visible ? 'block' : 'none'
    // zera o loop da animação
    const burgerStop = () => {
      setAnimation(false)
    }
    // ao selecionar um link do menu a animação termina em tempo 0
    const handleSelected = () => {
      setVisible(false)
      setAnimation(true)
    }
    // inicia o ciclo da animação até a metade de icone de fechamento 1.5s
    const burgerPlay = () => {
        setVisible(!visible)
        setAnimation(true)
        setDisable(!disable)
        setTimeout(() => {
          setDisable(false)
          burgerStop()
        }, 1000);
    }

    // exibir modal de login
    const { show, setShow } = useContext(LoggedContext)

  return (
    <div className={callMenu}>
      {show && (
        <Modal setShow={setShow} children={<SingIn setShow={setShow} />} />
      )}

      <Lottie 
        className={style.burgerAnimation}
        loop={true}
        animationData={Burger}
        play={animation}
        speed={1.5}
        onClick={ burgerPlay }
        style={{ pointerEvents: disableEvent }}
        onLoopComplete={ () => burgerStop() }
        
      />
      <nav style={{display: showMenu, pointerEvents: disableEvent}} className={style.menuContainer}>
        <ul className={style.menuContent} >
          <li onClick={ handleSelected }><Link to='/'>Home</Link></li>
          <li onClick={ handleSelected }><Link to='/services'>Serviços</Link></li>
          <li onClick={ handleSelected }><Link to='/about'>Sobre nós</Link></li>
        </ul>
        <ul className={style.userContent}>
          {user ? (
            <>
              <li
                onClick={() => {
                    dispatch(delUser());
                    localStorage.removeItem("token");
                    handleSelected()
                  }}
                >
                  <Link to="/" onClick={ handleSelected }>Sair</Link>
              </li>
              <div>
                <Link to='/profile' onClick={ handleSelected }><IoNotifications className={style.notificationIcon}/></Link>
                <Link to='/profile' onClick={ handleSelected }><img src={user.image_profile} className={style.userPicture} /></Link>
              </div>
            </>) : (
              <>
                <li onClick={() => {handleSelected(); setTimeout(() => {setShow(true)}, [300]);}}><Link>Entrar</Link></li>
              </>
            )
          }
        </ul>
      </nav>
    </div>
  )
}
