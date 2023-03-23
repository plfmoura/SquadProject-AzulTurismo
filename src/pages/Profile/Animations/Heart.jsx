import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import Heart from '../../../assets/animations/heart.json'
import style from './userImage.module.css'

export default function HeartAnimation({ image }) {
    const [ animation, setAnimation] = useState(false)
    const [ visible, setVisible ] = useState('none')
    
    const heartStop = () => {
      setAnimation(false)
      setVisible('none')
    }

    const heartPlay = () => {
        setAnimation(true)
        setVisible('block')
    }

  return (
    <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <img src={ image } className={style.imgContent} onDoubleClick={ heartPlay }/>
      <Lottie 
        className={style.heartAnimation}
        loop={true}
        animationData={Heart}
        play={animation}
        style={{ display:`${visible}`}}
        onLoopComplete={() => heartStop() }
      />
    </div>
  )
}
