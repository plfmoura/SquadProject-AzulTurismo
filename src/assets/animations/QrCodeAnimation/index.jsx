import React, { useState } from 'react'
import Lottie from 'react-lottie-player'
import qrCode from './qr-code.json'

export default function QrCodeAnimation() {

    return (
        <Lottie 
            className='testando'
            loop={true}
            animationData={qrCode}
            play={true}
            speed={0.6}
            style={{ width: 60, height: 60}}
        />
    )
}