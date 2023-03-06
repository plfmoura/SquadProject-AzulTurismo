import React from 'react'
import style from './teamCard.module.css'

export default function TeamCard({ name, office, image}){

  return (
    <div className={style.cardContainer}>
        <img src={ image } alt={ name } />
        <div className={style.cardPicture}>Foto</div>
        <div className={style.alignText}>
            <p>{ name }</p>
            <p>{ office }</p>
        </div>
    </div>
  )
}
