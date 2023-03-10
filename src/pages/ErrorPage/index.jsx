import React, { useEffect } from 'react'

export default function ErrorPage() {

  useEffect(() => {
    // para subir a pagina após carregamento
    window.scrollTo(0, 0);
  }, [])

  return (
    <div>
      <h1>Erro 404</h1>
      <h2>Poxa, algo deu errado!</h2>
    </div>
  )
}
