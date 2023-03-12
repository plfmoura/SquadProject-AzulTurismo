import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { LoggedContext } from "../../../context/LoggedContext";
import styles from "./buyForm.module.css";

export default function BuyForm({ tourPrice, amount, date, id }) {
  const state = useSelector((state) => state);
  const { user } = state.user;
  const { show, setShow } = useContext(LoggedContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    let quantity = e.target.quantity.value
    if(quantity === 'default'){
      return
    }
    console.log(quantity)
    !user ? setShow(!show) : navigate(`/payment/:${id}/:${quantity}`)
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      {/* RETIRAR GAMBIARRA PARA VERIFICAÇÃO SE TEM USUARIO */}
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
        <select name="quantity" required>
          {/* For para pegar sold - capacity */}
          <option value="default">Selecione</option>
          <option value='1'>{1}</option>
          {/* <option value='1'>{amount}</option> */}
        </select>
      </div>
      <Button
        type="submit"
        text="Solicitar Compra"
      />
    </form>
  );
}
