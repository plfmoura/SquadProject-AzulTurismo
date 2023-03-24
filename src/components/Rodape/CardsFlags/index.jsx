import { maxWidth } from '@mui/system';
import React from 'react'
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex, FaCcJcb, FaCcDinersClub } from 'react-icons/fa';
import visa from '../../../assets/paymentFlags/visa.png' 
import amex from '../../../assets/paymentFlags/bandeira_amex.png' 
import elo from '../../../assets/paymentFlags/elo_2.png' 
import mastercard from '../../../assets/paymentFlags/mc_vrt_pos.svg' 
import styles from '../CardsFlags/cardsFlags.module.css'

export default function CardsFlags() {
    return (

        <div className={styles.cardFlag}>
             <img className={styles.cardSizeVisa} src={ visa } />
             <img className={styles.cardSizeAmex} src={ amex } />
             <img className={styles.cardSizeElo} src={ elo } />
             <img className={styles.cardSizeMc} src={ mastercard } />
        </div>

)
}

{/* <FaCcVisa size={43} color={"#191970"} style={{ marginRight: '10px', marginLeft: '35px' }} />
<FaCcMastercard size={43} color={"#ff4600"} style={{ marginRight: '10px' }} />
<FaCcDiscover size={43} color={"#c0c0c0"} style={{ marginRight: '10px' }} />
<FaCcAmex size={43} color={"#191970"} style={{ marginRight: '10px' }} />
<FaCcJcb size={43} color={"#f00000"} style={{ marginRight: '10px' }} />
<FaCcDinersClub color={"#a2d1e9"} size={43} /> */}