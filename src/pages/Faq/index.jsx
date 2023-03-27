import React, { useContext, useEffect, useState } from 'react'
import style from './FAQ.module.css'
import { IoSearch } from 'react-icons/io5'
import OffCanvas from './OffCanvas';
import { NavBarContext } from '../../context/NavBarContext';
import axios from "axios"
const index = () => {

  //  // REQUISIÇAO A API

   const ConsultaApi = (URL) =>{

    axios.get(`http://localhost:3000/${URL}`)
    .then(function (response) {
    
      setDataBtn(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }),[]
  }

 
// OVERLAY


  const { setBgColor, setPaymentFooter, showOffCanvas, setShowOffCanvas } = useContext(NavBarContext);

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
    // para alterar estilização do footer caso venha direto da página de payment
    setPaymentFooter(false);
  }, []);

//  FUNÇAO DE CLICK do search
const BtnSearch = () => {
  const verificar = DataInput.data
  if (verificar == "") {
    alert("digite algo")
  }

  else if (verificar.includes("usuario") == true) {
    console.log("fazendo a requisiçao a tabela de usuario")
    setShowOffCanvas(true) 
    ConsultaApi("Usuario")
  }
  else if (verificar.includes("Usuario") == true) {
    console.log("fazendo a requisiçao a tabela de usuario")
    setShowOffCanvas(true)
    ConsultaApi("Usuario")
  }
  else if (verificar.includes("usuarios") == true) {
    console.log("fazendo a requisiçao a tabela de usuario")
    setShowOffCanvas(true)
    ConsultaApi("Usuario")
  }
  else if (verificar.includes("Usuarios") == true) {
    console.log("fazendo a requisiçao a tabela de usuario")
    setShowOffCanvas(true)
    ConsultaApi("Usuario")
  }
  else if (verificar.includes("pagamentos") == true) {
    console.log("fazendo a req a tabela pagamento")
    setShowOffCanvas(true)
    ConsultaApi("Pagamento")
  }
  else if (verificar.includes("Pagamentos") == true) {
    console.log("fazendo a req a tabela pagamento")
    setShowOffCanvas(true)
    ConsultaApi("Pagamento")
  }
  else if (verificar.includes("pagamento") == true) {
    console.log("fazendo a req a tabela pagamento")
    setShowOffCanvas(true)
    ConsultaApi("Pagamento")
  }
  else if (verificar.includes("Pagamento") == true) {
    console.log("fazendo a req a tabela pagamento")
    setShowOffCanvas(true)
    ConsultaApi("Pagamento")
  }
  else if (verificar.includes("Garantias") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }
  else if (verificar.includes("garantias") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }
  else if (verificar.includes("Garantia") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }
  else if (verificar.includes("garantia") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }
  else if (verificar.includes("Segurança") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }
  else if (verificar.includes("segurança") == true) {
    console.log("fazendo a req a tabela Garantias e segurança")
    setShowOffCanvas(true)
    ConsultaApi("seguranca")
  }

  else {
    console.log("Nao sou capaz de responder sua pergunta!")
  }



}

  // STATE DO MEU INPUT
  const [DataInput, setDataInput] = useState({
    data: "",
  })

  // FERIFICAÇAO DO VALOR DO MEU INPUT
  const HandleChange = (e) => {

    setDataInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

    // STATE DOS MEUS BUTTONS
    const [DataBtn,setDataBtn] = useState([])
    console.log(DataBtn)
  
  // FUNCTION CLICK BTN

  const ClickButton = (e) =>{
    let ValueBtn = e.target.value

    // setDataBtn(e.target.value)
    setShowOffCanvas(true)

    ConsultaApi(ValueBtn)

  const result = DataBtn.find((data)=>{data.titulo === "Usuario"})
 
  console.log(result)
  
  }


 
 

  return (
    <>
      {showOffCanvas &&
        <OffCanvas children={
          <div>
          
              
             {
              DataBtn.map((data,key)=>{
                return(
                  <div key={key}>
                    <h1>{data.titulo}</h1>
                  </div>
                )
              })
             }
          </div>
        } />
      }


      <div className={style.FAQ}>
        <section className={style.InfosFaq}>
          <h1>Ola! Precisando de Ajuda?</h1>
          <div className={style.inputSearch}>

            <input name="data" type="text" placeholder='Deixe aqui sua duvida...' onChange={HandleChange} />
            <button type='submit' onClick={BtnSearch}><IoSearch /></button>

          </div>

        </section>
        <section className={style.BtnFAQ}>

          <button className="Btn" value="usuario" onClick={ClickButton}>USER</button>
          <button className="Btn" value="pagamento" onClick={ClickButton}>PAGAMENTO</button>
          <button className="Btn" value="seguranca" onClick={ClickButton}>SEGURANÇA</button>


         
  
        </section>
      </div>
    </>
  )
}

export default index


