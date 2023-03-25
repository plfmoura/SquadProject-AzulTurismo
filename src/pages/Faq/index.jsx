import React, { useState } from 'react'
import Axios from "axios"
import  "./FAQ.css";
import { IoSearch } from 'react-icons/io5'
const index = () => {

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
    <div className='FAQ'>
        <section className='InfosFaq'>
            <h1>Ola! Precisando de Ajuda?</h1>
            <div className="inputSearch">

                <input name="data" type="text" placeholder='Deixe aqui sua duvida...' onChange={HandleChange} />
                <button type='submit' onClick={BtnSearch}><IoSearch /></button>
              
            </div>
        </section>
        <section className='BtnFaq'></section>
    </div>
  )
}

export default index