import React, { useEffect, useState } from "react";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/es/styles-compiled.css";
import OnSuccessAnimation from "../../../assets/animations/OnSuccess";
import Button from "../../../components/Button";
import styles from "./CreditCard.module.css";
import InputElement from "react-input-mask/lib/react-input-mask.production.min";
import { FaCcVisa, FaCcMastercard, FaCcDiscover, FaCcAmex, FaCcJcb, FaCcDinersClub } from 'react-icons/fa';

export default function Card({ handleCheckout, purchaseReturn }) {
  const [done, setDone] = useState(false);
  const [onSuccess, setOnSuccess] = useState(purchaseReturn)

  // let paymentDone = onSuccess ? { animation: 'disappear 2s ease normal' } : null

  useEffect(() => { setOnSuccess(purchaseReturn) }, [handleCheckout])

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

          <div className={styles.cardFlagsContainer}>
            <h3 className={styles.cardFlagsTitle}>Bandeiras aceitas</h3>
            <div className={styles.cardsFlags}>
              <FaCcVisa size={55} color={"#191970"} style={{ marginRight: '10px' }} />
              <FaCcMastercard size={55} color={"#ff4600"} style={{ marginRight: '10px' }} />
              <FaCcDiscover size={55} color={"#c0c0c0"} style={{ marginRight: '10px' }} />
              <FaCcAmex size={55} color={"#191970"} style={{ marginRight: '10px' }} />
              <FaCcJcb size={55} color={"#f00000"} style={{ marginRight: '10px' }} />
              <FaCcDinersClub color={"#a2d1e9"} size={55} />
            </div>
          </div>
          <div>


            <form className={styles.cardForm} onSubmit={handleCheckout}>
              <InputElement
                mask='9999 9999 9999 9999'
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
                <InputElement
                  type="text"
                  name="name"
                  placeholder="Titular do Cartão"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={cardDetails.name}
                  required
                />
                <InputElement
                  type="text"
                  name="expiry"
                  mask='99/99'
                  placeholder="MM/AA"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  value={cardDetails.expiry}
                  required
                />
              </div>
              <div className={styles.bottom}>
                <InputElement
                  type="tel"
                  name="CPF"
                  mask='999.999.999-99'
                  placeholder="CPF DO TITULAR"
                  pattern="^[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}$"
                  required
                />
                <input
                  type="tel"
                  name="cvc"
                  mask='999'
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
