import React, { useState } from 'react'
import './offCanvas.css'
import { HiOutlineXMark } from "react-icons/hi2";

export default function OffCanvas({ onShow, children }) {
    const [ show, setShow ] = useState(true)

  return (
    <>
    {show && 
    <div className='OffCanvas-overlay'>
        <div className="offCanvas-container">
            <div className="offCanvas-header">
                <HiOutlineXMark 
                    style={{fontSize: 35}}
                    onClick={() => setShow(!onShow)}/>
            </div>
            <div className="offCanvas-content">
                {/* Todos os elementos filhos deste offcanvas */}
                {/* CONTENT = CONTEUDO  */}
                { children }
            </div>
            <div className="offCanvas-footer">
                <h1>este é o rodapé deste elemento</h1>
            </div>
        </div>
    </div>
     }
    </>
  )
}
