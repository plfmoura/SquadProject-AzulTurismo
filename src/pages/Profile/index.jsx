import React, { useEffect, useState } from 'react'
import HeartAnimation from './HeartAnimation'
import style from './profile.module.css'

export default function Profile() {
  const [ index1, setIndex1 ] = useState(0)
  const [ index2, setIndex2 ] = useState(1)
  const [ index3, setIndex3 ] = useState(2)
  const [ index4, setIndex4 ] = useState(3)

  const handleUpdate = () => {
    setIndex1(index1 + 1)
    setIndex2(index2 + 1)
    setIndex3(index3 + 1)
    setIndex4(index4 + 1)

    if(index1 === 3){
      setIndex1(0)
    } 
    if(index2 === 3){
      setIndex2(0)
    } 
    if(index3 === 3){
      setIndex3(0)
    } 
    if(index4 === 3){
      setIndex4(0)
    } 
  }

  return (
    <div className={style.profileContainer}>
      <h1>Página de Usuário</h1>
      <button onClick={() => handleUpdate() }>NEXT</button>
      <div style={{display: 'flex'}}>
        {/* <img src={picture} alt="" width="10%"/>
        <img src={picture} alt="" width="10%"/>
        <img src={picture} alt="" width="10%"/>
        <img src={picture} alt="" width="10%"/> */}
      </div>
      {/* <div className={style.profileContent}>
        <HeartAnimation />
        <HeartAnimation />
        <HeartAnimation />
        <HeartAnimation />
      </div> */}
    </div>
  )
}
