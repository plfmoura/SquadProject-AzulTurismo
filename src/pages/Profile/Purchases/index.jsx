import React from "react";
import Button from "../../../components/Button";
import "./purchases.css";

export default function Purchases({ data }) {
  const today = Date.now();

  return (
    <div className="purchases-container">
      <div className="header-content">
        <h3>Histórico de Compras</h3>
      </div>
      <div className="main-content">
        {data &&
          data.map((item) => (
            <div
              className="ticket"
              style={
                today > Date.parse(new Date(item.data_tour.split("-")[2],item.data_tour.split("-")[1],item.data_tour.split("-")[0]))
                  ? {
                      backgroundColor: "#999",
                      color: "#fcfcfc",
                    }
                  : {
                      backgroundColor: "#fff",
                      color: "#333",
                    }
              }
            >
              <img
                src={`http://api.qrserver.com/v1/create-qr-code/?data=https://azul-turismo.vercel.app/#/tour/:${item.id_tour}`}
              />
              <div key={item.id_compras}>
                <span className="ticket-name">
                  {item.name ? item.name : "Nome do Passeio"}
                </span>
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
                      style={
                        today > Date.parse(new Date(item.data_tour.split("-")[2],item.data_tour.split("-")[1],item.data_tour.split("-")[0]))
                          ? { color: "#ff3333" }
                          : { color: "#00ff00", fontWeight: "600" }
                      }
                    >
                      {today > Date.parse(new Date(item.data_tour.split("-")[2],item.data_tour.split("-")[1],item.data_tour.split("-")[0])) ? "Indisponível" : "Disponível"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className="footer-content">
        <Button text="Duvidas?" />
      </div>
    </div>
  );
}
