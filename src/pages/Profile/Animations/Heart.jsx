import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import Heart from '../../../assets/animations/heart.json'

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
        <img src={ image } width='500px' height='350px' style={{position: "relative", zIndex: "0", objectFit: 'cover'}} onDoubleClick={ heartPlay }/>
      <Lottie 
        className='testando'
        loop={true}
        animationData={Heart}
        play={animation}
        style={{ width: 100, height: 100, display:`${visible}`, position: "absolute", zIndex: "1", overflow: 'hidden'}}
        onLoopComplete={() => heartStop() }
      />
    </div>
  )
}
