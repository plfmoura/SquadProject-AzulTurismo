import React, { useContext, useEffect } from 'react'
import { NavBarContext } from '../../context/NavBarContext';

export default function ErrorPage() {
  const { setBgColor } = useContext(NavBarContext); 

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página 
    setBgColor(true)
  }, [])

  return (
    <div>
      <h1>Erro 404</h1>
      <h2>Poxa, algo deu errado!</h2>
    </div>
  )
}
