import React from 'react'
import HeartAnimation from './HeartAnimation'
import style from './profile.module.css'

export default function Profile() {
  return (
    <div className={style.profileContainer}>
      <h1>Página de Usuário</h1>
      <div className={style.profileContent}>
        <HeartAnimation />
        <HeartAnimation />
        <HeartAnimation />
        <HeartAnimation />
      </div>
    </div>
  )
}
