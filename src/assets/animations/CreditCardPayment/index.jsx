import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import creditCard from './credit-card.json'

export default function CreditCardPayment() {
    const [ play, setPlay ] = useState(true)

    !play ? (
        setTimeout(() => {
            setPlay(true)
        }, [9000])) : (null)
    
    return (
        <Lottie 
            animationData={creditCard}
            play={play}
            speed={0.3}
            style={{ width: 80, height: 80}}
            onLoopComplete={() => setPlay(false)}
        />
    )
}