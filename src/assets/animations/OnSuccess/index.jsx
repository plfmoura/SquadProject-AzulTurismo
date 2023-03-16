import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import { useNavigate } from 'react-router-dom'
import OnSuccess from '../../../assets/animations/OnSuccess/on-success.json'

export default function OnSuccessAnimation() {
    const [ animation, setAnimation] = useState(true)
    const [ visible, setVisible ] = useState('block')
    const navigate = useNavigate()

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
            loop={true}
            animationData={OnSuccess}
            play={animation}
            style={{ width: 400, height: 400, display:`${visible}`, position: "absolute", zIndex: "5", overflow: 'hidden'}}
            onLoopComplete={() => navigate('/profile') }
        />
    )
}