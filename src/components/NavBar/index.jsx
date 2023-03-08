import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './navBar.module.css'
import { IoNotifications } from "react-icons/io5"
import ProfilePicture from '../../assets/profile/user.jpg'
import Modal from '../Modal'

export default function NavBar() {
  const [ signed, setSigned ] = useState(false)
  const[show,setShow]=useState(false);

  return (
    <>
    {show && <Modal setShow={setShow}/>}

    <div className={style.alignContent}>
      <div className={style.navBarContainer}>
        <div>
          <img src="azul.png" alt="Logo da empresa Azul Turismo" className={style.navBarLogo} />
          <span>AZUL TOUR</span>
        </div>
        <nav className={style.menuContainer}>
          <ul className={style.menuContent}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/payment'>Serviços</Link></li>
            <li><Link to='/about'>Sobre nós</Link></li>
          </ul>
        </nav>
        <div className={style.userContainer}>
          <ul className={style.menuContent}>
            {signed ? (
              <>
                <li><Link to='/profile'>Meus Passeios</Link></li>
                <li onClick={() => setSigned(!signed)}><Link to='/'>Sair</Link></li>
                <div>
                  <Link to='/profile'><IoNotifications className={style.notificationIcon}/></Link>
                  <Link to='/profile'><img src={ProfilePicture} alt="Imagem de Perfil do usuário" className={style.userPicture} /></Link>
                </div>
              </>) : (
                <>
                  <li onClick={() => setShow(true)}><Link>Entrar</Link></li>
                  <div>
                    <Link to='/profile'><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVKTCvhbnqwyIbeN8eZAzlzb9s9d6LBnNWsw&usqp=CAU' alt="Imagem de Perfil do usuário" className={style.userPicture} /></Link>
                  </div>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}