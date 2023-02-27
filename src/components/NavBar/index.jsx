import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
      <ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
        <Link to='/'><li>Home</li></Link>
        <Link to='/description'><li>Descrição Passeio</li></Link>
      </ul>
    </nav>
  )
}
