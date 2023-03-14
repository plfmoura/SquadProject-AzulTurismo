import React, { createElement, useContext, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { LoggedContext } from "../../../context/LoggedContext";
import styles from "./buyForm.module.css";

export default function BuyForm({ tourPrice, amount, date, id }) {
  const state = useSelector((state) => state);
  const { user } = state.user;
  const { show, setShow } = useContext(LoggedContext);
  const [tickets, setTickets] = useState([]);
  const [ warning, setWarning ] = useState(false)
  const navigate = useNavigate();
  const formRef = useRef();

  let showWarning = warning ? {
    transition: 'all 300ms ease',
    border: '1px solid #2eafff',
    transform: 'scale(1.1)',
  } : {
    border: '1px solid #2eaf0000',
    transition: 'all 300ms ease',
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let quantity = e.target.quantity.value;
    if (quantity === "default") {
      setTimeout(() => {
        setWarning(!warning) 
      } ,[1000])
      return;
    }
    !user ? setShow(!show) : navigate(`/payment/:${id}/:${quantity}`);
  };

  // Para adicionar as opções de quantidade de tickets disponíveis para cada passeio
  const newOption = () => {
    for (let i = 1; i <= amount; i++) {
      tickets.push(i);
    }
  };

  useEffect(() => {
    newOption();
  }, []);

  return (
    <form 
      ref={formRef}
      onSubmit={handleSubmit} 
      className={styles.formContainer}>
      <h2>
        R${tourPrice}
        <span> /pessoa</span>
      </h2>
      <div>
        <label htmlFor="date">Data da Reserva</label>
        <p className={styles.reservationDate}>{date}</p>
        <hr
          style={{
            border: "1px solid #33333322",
            width: "100%",
            margin: "1rem 0",
          }}
        />
        <label htmlFor="date">Quantidade de Pessoas</label>
        {tickets && (
          <select name="quantity" required id="quantity" style={showWarning}>
            <option value="default">Selecione</option>
            {tickets.map((quantity, key) => 
              <option value={quantity} key={key}>
                {quantity} {quantity === 1 ? 'pessoa' : 'pessoas'}
              </option>
            )}
          </select>
        )}
      </div>
      <Button type="submit" text="Solicitar Compra" />
    </form>
  );
}
