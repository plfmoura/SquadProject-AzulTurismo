import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import Heart from '../../../assets/animations/heart.json'
import UserPicture from '../../../assets/profile/user.jpg'

export default function HeartAnimation() {

    const [ animation, setAnimation] = useState(false)
    const [ visible, setVisible ] = useState('none')
    
    const heartStop = () => {
      setAnimation(false)
      setVisible('none')
      console.log('Final da Animação')
    }

    const heartPlay = () => {
        setAnimation(true)
        setVisible('block')
        console.log('Você curtiu essa foto!')
    }

  return (
    <div style={{display: "flex", alignItems: 'center', justifyContent: 'center'}}>
        <img src={UserPicture} width={600} style={{position: "relative", zIndex: "2"}} onDoubleClick={ heartPlay }/>
      <Lottie 
        className='testando'
        loop={true}
        animationData={Heart}
        play={animation}
        style={{ width: 100, height: 100, display:`${visible}`, position: "absolute", zIndex: "5"}}
        onLoopComplete={() => heartStop() }
      />
    </div>
  )
}
