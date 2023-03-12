import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import erroAnimation from '../../../assets/animations/404-error.json'

export default function ErrorMotion () {
    const [ animation, setAnimation] = useState(false)

  return (
      <Lottie 
        className='animated-error'
        loop={false}
        animationData={erroAnimation}
        play={true}
        style={{ width: 200, height: 200 }}
      />
  )
}
