import Lottie from 'react-lottie-player'
import { Link } from 'react-router-dom'
import Burger from '../../../assets/animations/menuIcon.json'
import style from './mobileMenu.module.css'
import React, { useContext, useState } from 'react'
import { IoNotifications } from "react-icons/io5"
import ProfilePicture from '../../../assets/profile/user.jpg'
import Modal from '../../Modal'
import SingIn from '../../../pages/SingIn'
import { LoggedContext } from '../../../context/LoggedContext'

export default function BurgerMobileMenu({ callMenu }) {

    const [ animation, setAnimation] = useState(false)
    const [ visible, setVisible ] = useState(false)
    const [ disable, setDisable ] = useState(false)
    
    let disableEvent = disable ? 'none' : 'all'
    let showMenu = visible ? 'block' : 'none'

    const [ signed, setSigned ] = useState(true)
    const { show, setShow } = useContext(LoggedContext)

    const burgerStop = () => {
      setAnimation(false)
      console.log('Final da Animação')
    }

    const handleSelected = () => {
      setVisible(false)
      setAnimation(true)
    }

    const burgerPlay = () => {
        setVisible(!visible)
        setAnimation(true)
        console.log('Você abriu o menu!')
        setDisable(!disable)
        setTimeout(() => {
          setDisable(false)
          burgerStop()
        }, 1500);
    }

  return (
    <div className={callMenu}>
      {show && <Modal setShow={setShow} children={ <SingIn />}/>}
      <Lottie 
        className={style.burgerAnimation}
        loop={true}
        animationData={Burger}
        play={animation}
        onClick={ burgerPlay }
        style={{ pointerEvents: disableEvent }}
        onLoopComplete={() => burgerStop() }
        
      />
      <nav style={{display: showMenu}} className={style.menuContainer}>
        <ul className={style.menuContent} >
          <li onClick={ handleSelected }><Link to='/'>Home</Link></li>
          <li onClick={ handleSelected }><Link to='/payment'>Serviços</Link></li>
          <li onClick={ handleSelected }><Link to='/about'>Sobre nós</Link></li>
        </ul>
        <ul className={style.userContent}>
          {signed ? (
            <>
              <li onClick={ handleSelected }><Link to='/profile'>Meus Passeios</Link></li>
              <li onClick={() => {setSigned(!signed); handleSelected()}}><Link to='/'>Sair</Link></li>
              <div>
                <Link to='/profile' onClick={ handleSelected }><IoNotifications className={style.notificationIcon}/></Link>
                <Link to='/profile' onClick={ handleSelected }><img src={ProfilePicture} alt="Imagem de Perfil do usuário" className={style.userPicture} /></Link>
              </div>
            </>) : (
              <>
                <li onClick={() => {setShow(true); handleSelected()}}><Link>Entrar</Link></li>
                <div onClick={ handleSelected }>
                  <Link to='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU' alt="Imagem de Perfil do usuário" className={style.userPicture} /></Link>
                </div>
              </>
            )
          }
        </ul>
      </nav>
    </div>
  )
}
