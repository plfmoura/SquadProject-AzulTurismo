import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import example from '../../../assets/animations/heart.json'

export default function example() {
    const [ animation, setAnimation] = useState(false)
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
            animationData={example}
            play={animation}
            style={{ width: 100, height: 100, display:`${visible}`, position: "absolute", zIndex: "5", overflow: 'hidden'}}
            onLoopComplete={() => Stop() }
        />
    )
}