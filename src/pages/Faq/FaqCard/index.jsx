import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavBarContext } from "../../../context/NavBarContext";
import "./faqCard.css";

export default function FaqCard({ title, text, icon, sendData }) {
  const state = useSelector((state) => state);
  const { faq } = state.faq;
  const { setShowOffCanvas } = useContext(NavBarContext)
  // const [filtered, setFiltered] = useState();

  const handleClick = () => {
    if (faq) {
      let myFaq = faq.filter((item) => item.title === title);
      sendData(myFaq)
    }
    setShowOffCanvas(true)
  }

  return (
    <div
      className="Faq-Card-container"
      onClick={handleClick}
    >
      <div className="faq-card-content">
        <i className="faq-card-icon">{icon}</i>
        <span>{text}</span>
      </div>
    </div>
  );
}
