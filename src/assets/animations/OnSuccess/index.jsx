import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import OnSuccess from '../../../assets/animations/OnSuccess/on-success.json'

export default function OnSuccessAnimation() {
    const [ animation, setAnimation] = useState(true)
    const [ visible, setVisible ] = useState('none')

    const Stop = () => {
        setAnimation(false)
        setVisible('none')
      }
  
      const Play = () => {
          setAnimation(true)
          setVisible('block')
      }

    return (
        <Lottie 
            className='testando'
            loop={true}
            animationData={OnSuccess}
            play={animation}
            style={{ width: 100, height: 100, display:`${visible}`, position: "absolute", zIndex: "5", overflow: 'hidden'}}
            // onLoopComplete={() => Stop() }
        />
    )
}