import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import creditCard from './credit-card.json'

export default function CreditCardPayment() {
    const [ animation, setAnimation] = useState(false)
    const [ visible, setVisible ] = useState('none')

    const Stop = () => {
        setAnimation(false)
        setVisible('none')
      }
  
    return (
        <Lottie 
            className='testando'
            loop={true}
            animationData={creditCard}
            play={true}
            speed={0.3}
            style={{ width: 80, height: 80}}
        />
    )
}