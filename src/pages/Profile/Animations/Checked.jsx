import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import checkAnimation from '../../../assets/animations/checked.json'

export default function Checked({ animationStatus }) {
    const [ animation, setAnimation] = useState(true)
    const [ visible, setVisible ] = useState('block')

    animation ? setVisible('block') : setVisible('none')

    const Stop = () => {
        setAnimation(false)
        console.log('parou')
      }
  
    //   const Play = () => {
    //       setAnimation(true)
    //   }

    return (
        <>
            <Lottie 
                className='input-checked'
                loop={false}
                animationData={checkAnimation}
                play={animation}
                style={{ width: 200, height: 200, display:`${visible}`, position: "absolute", zIndex: "5", overflow: 'hidden'}}
                // onLoopComplete={() => Stop() }
            />
        </>
    )
}