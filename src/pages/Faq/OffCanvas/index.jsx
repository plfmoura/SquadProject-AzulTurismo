import React, { useContext, useState } from 'react'
import './offCanvas.css'
import { HiOutlineXMark } from "react-icons/hi2";
import { NavBarContext } from '../../../context/NavBarContext';

export default function OffCanvas({ children }) {
    const { showOffCanvas, setShowOffCanvas } = useContext(NavBarContext);

  return (
    <>
    <div className='OffCanvas-overlay'>
        <div className="offCanvas-container">
            <div className="offCanvas-header">
                <label onClick={() => {setShowOffCanvas(false)}}>
                    <HiOutlineXMark 
                        style={{
                            fontSize: 35,
                            cursor: 'pointer'
                        }}
                    />
                </label>
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
    </>
  )
}
