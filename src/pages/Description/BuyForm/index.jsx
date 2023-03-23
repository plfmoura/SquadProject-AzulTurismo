import React, { useContext, useEffect, useRef, useState } from "react";
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
  const [avaiableTickets, setAvaiableTickets] = useState();
  const [warning, setWarning] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef();

  let warningStatus = warning ? "visible" : "hidden";
  let showWarning = warning
    ? {
        transition: "all 500ms ease",
        border: "1px solid #f00",
      }
    : {
        border: "1px solid #2eaf0000",
        transition: "all 200ms ease",
      };

  const handleSubmit = (e) => {
    e.preventDefault();
    let quantity = e.target.quantity.value;
    if (quantity === "default") {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, [5000]);
      return;
    }
    !user ? setShow(!show) : navigate(`/payment/:${id}/:${quantity}`);
  };

  useEffect(() => {
    // Para adicionar as opções de quantidade de tickets disponíveis para cada passeio
    for (let i = 1; i <= amount; i++) {
      tickets.push(i);
    }
    // Filtrar entrega duplicada do REACT
    setAvaiableTickets(
      tickets.filter(function (check, index) {
        return tickets.indexOf(check) === index;
      })
    );
  }, []);

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={styles.formContainer}
    >
      <h2>
        R${tourPrice.toString().replace('.', ',')}
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
        {avaiableTickets && (
          <select name="quantity" required id="quantity" style={showWarning}>
            <option value="default">Selecione</option>
            {avaiableTickets.map((quantity, key) => (
              <option value={quantity} key={key}>
                {quantity} {quantity === 1 ? "pessoa" : "pessoas"}
              </option>
            ))}
          </select>
        )}
      </div>
      <span
          style={{
            fontSize: 15,
            color: "#ff0000",
            visibility: `${warningStatus}`,
            position: "relative",
            zIndex: 5,
          }}
        >
          Selecione uma opção!
        </span>
      <Button type="submit" text="Solicitar Compra" />
    </form>
  );
}
