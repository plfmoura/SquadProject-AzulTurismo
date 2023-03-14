import React from "react";
import Button from "../../../components/Button";
import "./purchases.css";

export default function Purchases({ ticketName, ticketDate, purchaseDate }) {
    const today =  new Date().getDate()

    let checkDate = today > ticketDate ? {
        color: '#ff3333',
    } : {
        color: '#00ff00',
        fontWeight: '600'
    }

    let ticketStatus = today > ticketDate ? {
        backgroundColor: '#999'
    } : {
        backgroundColor: '#fff'
    }

    return (
    <div className="purchases-container">
        <div className="header-content">
            <h3>Histórico de Compras</h3>
        </div>
        <div className="main-content">
            <div className="ticket" style={ticketStatus}>
                <img src="https://i0.wp.com/www.mundoopensource.com.br/wp-content/uploads/2010/04/qrcode.png" />
                <div>
                    <span className="ticket-name">{ticketName ? ticketName: 'Nome do Passeio'}</span>
                    <div className="ticket-info">
                    <div>
                        <span className="span-title">Data da compra</span>
                        <span className="span-content">{purchaseDate ? purchaseDate: '00/00/00'}</span>
                    </div>
                    <div>
                        <span className="span-title">Data do Passeio</span>
                        <span className="span-content">{ticketDate ? ticketDate: '00/00/00'}</span>
                    </div>
                    <div>
                        <span className="span-title">Disponibilidade</span>
                        <span className="span-content" style={ checkDate }>Disponível</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer-content">
            <Button text='Duvidas?' />
        </div>
    </div>
  );
}
