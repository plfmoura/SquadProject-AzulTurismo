import React, { useState } from 'react'
import  "./FAQ.css";
import { IoSearch } from 'react-icons/io5'
import OffCanvas from './OffCanvas';
const index = () => {

  const [ showOffCanvas, setShowOffCanvas ] = useState(false)
  // OBJETO TESTE

 
  // STATE DO MEU INPUT
  const [DataInput,setDataInput] = useState({
    data:"",
  })

  // FERIFICAÇAO DO VALOR DO MEU INPUT
  const HandleChange =(e) =>{

    setDataInput((prev)=>({...prev,[e.target.name]: e.target.value}))

  }

  //  FUNÇAO DE CLICK
  const BtnSearch = () =>{
    if (DataInput.data == "") {
     alert("digite algo")
    }
     else {console.log(DataInput)}
  }

  return (
    <>
    {showOffCanvas &&
      <OffCanvas onShow={showOffCanvas} children={
        <h1>Sou o Filho deste elemento</h1>
      }/>
    }

    <div className='FAQ'>
        <section className='InfosFaq'>
            <h1>Ola! Precisando de Ajuda?</h1>
            <div className="inputSearch">

                <input name="data" type="text" placeholder='Deixe aqui sua duvida...' onChange={HandleChange} />
                <button type='submit' onClick={BtnSearch}><IoSearch /></button>
              
            </div>
            <div className="call-my-offCanvas">
              <button onClick={() => setShowOffCanvas(!showOffCanvas)}>Show OffCanvas</button>
            </div>
        </section>
        <section className='BtnFaq'>
          
        </section>
    </div>
    </>
  )
}

export default index