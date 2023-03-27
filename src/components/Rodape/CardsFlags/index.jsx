import React from "react";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcDiscover,
  FaCcAmex,
  FaCcJcb,
  FaCcDinersClub,
} from "react-icons/fa";
import visa from "../../../assets/payment/flag_visa.png";
import amex from "../../../assets/payment/flag_amex.png";
import elo from "../../../assets/payment/flag_elo.png";
import mastercard from "../../../assets/payment/flag_master.svg";
import dinnerClub from "../../../assets/payment/flag_dinner.png"
import styles from "../CardsFlags/cardsFlags.module.css";

export default function CardsFlags() {
  return (
    <div>
      <span
        style={{ display: "block", marginBottom: ".2rem", fontSize: "10px" }}
      >
        A plataforma Azul conta com seguro viagem gratuíto para as bandeiras.
      </span>
      <div
        className={styles.cardFlag}
        style={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "#fff",
          padding: ".5rem 1rem",
        }}
      >
        <img
          className={styles.cardSizeVisa}
          src={visa}
          style={{ width: "70px", height: "22px", objectFit: "cover" }}
        />
        <img
          className={styles.cardSizeAmex}
          src={amex}
          style={{ width: "55px", height: "30px", objectFit: "cover" }}
        />
        <img
          className={styles.cardSizeElo}
          src={elo}
          style={{ width: "60px", height: "33px", objectFit: "cover" }}
        />
        <img
          className={styles.cardSizeMc}
          src={mastercard}
          style={{ width: "60px", height: "38px", objectFit: "cover" }}
        />
        <img
          className={styles.cardSizeMc}
          src={dinnerClub}
          style={{ width: "60px", height: "38px", objectFit: "cover" }}
        />
        
      </div>
    </div>
  );
}

{
  /* <FaCcVisa size={43} color={"#191970"} style={{ marginRight: '10px', marginLeft: '35px' }} />
<FaCcMastercard size={43} color={"#ff4600"} style={{ marginRight: '10px' }} />
<FaCcDiscover size={43} color={"#c0c0c0"} style={{ marginRight: '10px' }} />
<FaCcAmex size={43} color={"#191970"} style={{ marginRight: '10px' }} />
<FaCcJcb size={43} color={"#f00000"} style={{ marginRight: '10px' }} />
<FaCcDinersClub color={"#a2d1e9"} size={43} /> */
}
