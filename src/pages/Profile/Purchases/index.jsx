import React, { useEffect, useRef, useState } from "react";
import Button from "../../../components/Button";
import "./purchases.css";

export default function Purchases({ data }) {
    const today =  new Date().getDate()
    const purchaseRef = useRef()
    const ticketRef = useRef()
    useEffect(() => {
    } , [data])

    return (
    <div className="purchases-container">
        <div className="header-content">
            <h3>Histórico de Compras</h3>
        </div>
        <div className="main-content">
        {data && data.map((item) => (
            <div className="ticket" 
                style={today > item.data_tour ? {
                    backgroundColor: '#999',
                    color: '#fcfcfc'
                } : {
                    backgroundColor: '#fff',
                    color: '#333'
                }
            }>
            <img src="https://i0.wp.com/www.mundoopensource.com.br/wp-content/uploads/2010/04/qrcode.png" />
                <div key={item.id_compras}>
                    <span className="ticket-name">{item.name ? item.name: 'Nome do Passeio'}</span>
                    <div className="ticket-info">
                    <div>
                        <span className="span-title">Data da compra</span>
                        <span className="span-content">{item.data_compra}</span>
                    </div>
                    <div>
                        <span className="span-title">Data do Passeio</span>
                        <span className="span-content">{item.data_tour}</span>
                    </div>
                    <div>
                        <span className="span-title">Disponibilidade</span>
                        <span 
                            className="span-content"
                            style={today > item.data_tour ? 
                            ({color: '#ff3333'}) : (
                                {color: '#00ff00',
                                fontWeight: '600'})
                            }
                            >{today > item.data_tour ? 'Disponível' : 'Indisponível'}</span>
                    </div>
                    </div>
                </div>
            </div>
            ))
            }
        </div>
        <div className="footer-content">
            <Button text='Duvidas?' />
        </div>
    </div>
  );
}
