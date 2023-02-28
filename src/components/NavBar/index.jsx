import React from 'react'
import { Link } from 'react-router-dom'
import style from './navBar.module.css'
import { IoNotifications } from "react-icons/io5"

export default function NavBar() {
  return (
    <div className={style.alignContent}>
      <div className={style.navBarContainer}>
        <div>
          <img src="azul.png" alt="Logo da empresa Azul Turismo" className={style.navBarLogo} />
          <span>AZUL TOUR</span>
        </div>
        <nav className={style.menuContainer}>
          <ul className={style.menuContent}>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/description'>Serviços</Link></li>
            <li><Link to='/description'>Sobre nós</Link></li>
          </ul>
        </nav>
        <div className={style.userContainer}>
          <ul className={style.menuContent}>
            <li><Link to='/profile'>Meus Passeios</Link></li>
            <li><Link to='/'>Sair</Link></li>
            <div>
              <Link to='/profile'><IoNotifications className={style.notificationIcon}/></Link>
              <Link to='/profile'><img src="/src/assets/profile/user.jpg" alt="" className={style.userPicture} /></Link>
            </div>
          </ul>
        </div>
      </div>
    </div>
  )
}