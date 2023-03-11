import React from 'react'
import Lottie from 'react-lottie-player'
import dotsPreload from '../../assets/animations/dots-preloader.json'

export default function PreLoader() {

  return (
      <Lottie 
        className='dots-preload'
        loop={true}
        animationData={ dotsPreload }
        play={true}
        style={{ width: 200, height: 200 }}
      />
  )
}
