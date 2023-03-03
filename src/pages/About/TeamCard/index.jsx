import React from 'react'
import style from './teamCard.module.css'

export default function TeamCard() {
  return (
    <div className={style.cardContainer}>
        {/* <img src="" alt="" /> */}
        <div className={style.cardPicture}>FOTO</div>
        <div className={style.alignText}>
            <p>Nome Sobrenome</p>
            <p>Função</p>
        </div>
    </div>
  )
}
