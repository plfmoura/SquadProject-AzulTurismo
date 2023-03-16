import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import OnSuccessAnimation from "../../../assets/animations/OnSuccess";
import Button from "../../../components/Button";
import styles from "./CreditCard.module.css";

export default function Card({ handleCheckout, purchaseReturn }) {
  const [ done, setDone ] = useState(false);
  const [ onSuccess, setOnSuccess ] = useState(purchaseReturn)

  // let paymentDone = onSuccess ? { animation: 'disappear 2s ease normal' } : null

  useEffect(() => { setOnSuccess(purchaseReturn)}, [ handleCheckout ])
  
  useEffect(() => {
    setDone(false);
  }, []);

  const data = {
    cvc: "",
    expiry: "",
    focus: "",
    name: "",
    number: "",
    cpf: "",
  };

  const [cardDetails, setCardDetails] = useState(data);

  const handleInputFocus = (e) => {
    setCardDetails({ ...cardDetails, focus: e.target.name });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  return (

    <>
    {!onSuccess ? (
    <div className={styles.cardContainer}>
      <Cards
        cvc={cardDetails.cvc}
        expiry={cardDetails.expiry}
        focused={cardDetails.focus}
        name={cardDetails.name}
        number={cardDetails.number}
        cpf={cardDetails.cpf}
        placeholders={{
          name: "SEU NOME AQUI",
        }}
      />
      <div>
        <form className={styles.cardForm} onSubmit={handleCheckout}>
          <input
            type="tel"
            name="number"
            placeholder="0000 0000 0000 0000"
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            value={cardDetails.number}
            pattern="^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$"
            required
          />
          <div className={styles.mainContent}>
            <input
              type="text"
              name="name"
              placeholder="Titular do Cartão"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.name}
              required
            />
            <input
              type="text"
              name="expiry"
              placeholder="MM/AA"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.expiry}
              pattern="^[0-9]{4}$"
              required
            />
          </div>
          <div className={styles.bottom}>
            <input
              type="text"
              name="CPF"
              placeholder="CPF DO TITULAR"
              pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$"
              required
            />
            <input
              type="tel"
              name="cvc"
              placeholder="CVC"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              value={cardDetails.cvc}
              pattern="^[0-9]{3}$"
              maxLength={3}
              required
            />
          </div>
          <div className={styles.submitArea}>
            <Button text={"Confirmar Compra"} type="submit" />
          </div>
        </form>
      </div>
    </div>
    ) : (
      <div className={styles.onPurchaseSuccess}>
        <OnSuccessAnimation />
      </div>
    )
    }
    </>
  );
}
