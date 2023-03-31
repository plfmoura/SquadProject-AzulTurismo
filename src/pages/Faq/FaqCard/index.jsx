import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavBarContext } from "../../../context/NavBarContext";
import "./faqCard.css";

export default function FaqCard({ title, text, icon, setDataBtn, setLoading }) {
  const state = useSelector((state) => state);
  const { faq } = state.faq;
  const { setShowOffCanvas } = useContext(NavBarContext);

  const handleClick = () => {
    //funcão pra atualizar as faq propias das card
    if (faq) {
      let myFaq = faq.filter((item) => item.title === title);
      //atualizo o state no componente pai que permite a comunicacao entre componentes
      setDataBtn(myFaq);
      //set do state que mostra o modal e da animação de loading
      setTimeout(() => {
        setLoading(false);
      }, [500]);
      setShowOffCanvas(true);
    }
  };

  return (
    <div className="Faq-Card-container" onClick={handleClick}>
      <div className="faq-card-content">
        <i className="faq-card-icon">{icon}</i>
        <span>{text}</span>
      </div>
    </div>
  );
}
