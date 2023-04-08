import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import move360 from './video-360.json'
import '../animationStyle.css'

export default function Move360() {
    const [ play, setPlay ] = useState(true)

    return (
        <Lottie 
            animationData={move360}
            play={play}
            speed={0.8}
            style={{ width: 200, height: 200}}
            className='move360-style'
        />
    )
}