import React from 'react'
import Lottie from 'react-lottie-player'
import MapMarker from '../../../assets/animations/mapMarker.json'

export default function MarkerAnimation() {

  return (
      <Lottie 
        loop={true}
        animationData={ MapMarker }
        play={true}
        style={{ width: 100, height: 100}}
      />
  )
}
