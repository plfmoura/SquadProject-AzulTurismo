import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../../context/NavBarContext';
import NavBar from "../../components/NavBar";
import './404error.css'
import ErrorMotion from './ErrorMotion';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';

export default function ErrorPage() {
  const { setBgColor, setPaymentFooter } = useContext(NavBarContext); 
  const navigate = useNavigate()

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página 
    setBgColor(true)
    setPaymentFooter(false)
  }, [])

  return (
    <div className='ErrorPage'>
      <NavBar />
      <article className='error-content'>
        <ErrorMotion />
        <div className='align-text'>
          <h2>Algo deu errado...</h2>
          <Button text='Voltar' onPress={() => navigate(-1)} />
        </div>
      </article>
    </div>
  )
}
