import React, { useState } from 'react'
import QrCodeAnimation from '../../../assets/animations/QrCodeAnimation';
import Button from '../../../components/Button';
import './qrCode.css'

export default function QrCodePayment({value, id_qrCode, purchaseName}) {
  const [ show, setShow ] = useState(false)
  const today = Date.now();
  
  let date = new Date(today + 300000).toLocaleString()
  let inputValue = `M8Bl2c${today}MqoFli${purchaseName}445ameU2023`
  let showArea = show ? '100%' : '3rem' 
  let hideContent = show? 'flex' : 'none';

  const handleChange = () => {
    setShow(!show)
  }

  return (
    <div style={{maxHeight: showArea}}>
      <div className='qrCode-header-content'>
        <h4 onClick={ handleChange } style={{cursor: 'pointer'}}>Pagamento via QR code(PIX)</h4>
        <QrCodeAnimation />
      </div>
      <section className='qrCode-main-content' style={{display: hideContent}}>
        <span>Valor: <strong>R${value}</strong></span>
        <span style={{fontSize: 14}}>Código válido até {date}</span>
        <img
          src={`http://api.qrserver.com/v1/create-qr-code/?data=https://azul-turismo.vercel.app/#/tour/:${id_qrCode}`}
          width='200px'
        />
        <form className='payment-info-content'>
          <span style={{fontSize: 14, width: '80%'}}>Utilize o App do seu banco para escanear o QR Code acima e concluir o pagamento.</span>
          <label htmlFor="copyPix">Pix Copia e Cola, clique no código abaixo para copiar.</label>
          <input 
            type="text" 
            style={{width: '60%', marginTop: 10}} 
            value={inputValue} 
            onClick={window.navigator.clipboard.writeText(inputValue)}
            disabled
          />
        </form>
      </section>
    </div>
  )
}
