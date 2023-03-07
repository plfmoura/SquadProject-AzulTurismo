import React from 'react'
import Card from './Card'
import style from './payment.module.css'

export default function Payment() {
  return (
    <div className={style.paymentContainer}>
      <h1>Página de pagamento</h1>
      <Card/>
    </div>
  )
}
