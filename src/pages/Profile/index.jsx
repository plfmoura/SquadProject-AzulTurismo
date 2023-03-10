import React, { useEffect, useState } from 'react'
import HeartAnimation from './HeartAnimation'
import style from './profile.module.css'
import Button  from '../../components/Button'
import { BsFillPencilFill } from 'react-icons/bs'
import { AiFillStar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import userBg from '../../assets/profile/andressa.jpg'
import userPicture from '../../assets/profile/user.jpg'

export default function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
    // para subir a pagina após carregamento
  }, [])
  
  let userName = 'Andressa Mascarenhas'

  return (
    <div className={style.profileContainer}>
      <header className={style.userBackground}>
        <img src={userBg} />
      </header>
      <main className={style.profileContent}>
        <div className={style.profileHeader}>
          <div className={style.alignContent}>
            <img 
              className={style.profilePicture} 
              src={userPicture} 
            />
            <div className={style.userInfo}>
              <h2>{ userName }</h2>
              <div>
                <div className={style.profileRating}>
                  <p><span><AiFillStar/></span> 187 avaliações</p>
                  <p><span><TfiMedallAlt/></span> Fominha de Excursão</p>
                </div>
                <Button text='Meus Passeios'/>
              </div>
            </div>
          </div>
        </div>
        <div className={style.profileBio}>
          <div>
            <h3>Profissão</h3>
            <BsFillPencilFill />
          </div>
          <p>Exemplo de Profissão</p>
          <hr />
          <div>
            <h3>Sobre mim</h3>
            <BsFillPencilFill />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Rhoncus aenean vel elit scelerisque mauris. Quam quisque id diam vel quam elementum pulvinar. Blandit cursus risus at ultrices mi tempus imperdiet. Purus faucibus ornare suspendisse sed nisi. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Leo vel orci porta non pulvinar. Dolor sit amet consectetur adipiscing. Varius duis at consectetur lorem donec. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tempor commodo ullamcorper a lacus vestibulum sed arcu.</p>
        </div>
        <div className={style.profileInfo}>
          <div>
            <h3>Idiomas</h3>
            <BsFillPencilFill />
          </div>
          <div>
            <p>Português</p>
            <p>Português</p>
            <p>Português</p>
          </div>
          <hr />
          <div>
            <h3>Localização</h3>
            <BsFillPencilFill />
          </div>
          <p>Rio de Janeiro, Brazil</p>
          <hr />
          <div>
            <h3>Telefones</h3>
            <BsFillPencilFill />
          </div>
          <p>(21)00000-0000</p>
          <p>(21)00000-0000</p>
          <hr />
          <div>
            <h3>Email</h3>
            <BsFillPencilFill />
          </div>
          <p>email@email.com</p>
        </div>
      </main>
      <section className={style.profileFooter}>
        <h2>Arquivos de Andressa</h2>
        <div>
          <HeartAnimation />
          <HeartAnimation />
          <HeartAnimation />
          <HeartAnimation />
        </div>
      </section>
    </div>
  )
}
