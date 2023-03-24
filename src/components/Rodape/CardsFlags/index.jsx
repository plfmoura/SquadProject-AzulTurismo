import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex, FaCcJcb, FaCcDinersClub } from 'react-icons/fa';


export default function CardsFlags() {
    return (

        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginRight: '3rem'
        }}>

            <FaCcVisa size={43} color={"#191970"} style={{ marginRight: '10px', marginLeft: '35px' }} />
            <FaCcMastercard size={43} color={"#ff4600"} style={{ marginRight: '10px' }} />
            <FaCcDiscover size={43} color={"#c0c0c0"} style={{ marginRight: '10px' }} />
            <FaCcAmex size={43} color={"#191970"} style={{ marginRight: '10px' }} />
            <FaCcJcb size={43} color={"#f00000"} style={{ marginRight: '10px' }} />
            <FaCcDinersClub color={"#a2d1e9"} size={43} />
        </div>

    )
}
