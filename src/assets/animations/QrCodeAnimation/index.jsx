import React, { useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'
import qrCode from './qr-code.json'

export default function QrCodeAnimation() {
    const [ play, setPlay ] = useState(true)

    !play ? (
        setTimeout(() => {
            setPlay(true)
        }, [7000])) : (null)

    return (
        <Lottie 
            animationData={qrCode}
            play={play}
            speed={0.6}
            style={{ width: 60, height: 60}}
            onLoopComplete={() => setPlay(false)}
        />
    )
}