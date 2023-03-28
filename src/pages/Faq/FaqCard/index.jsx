import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./faqCard.css";

export default function FaqCard({ title, text, icon }) {
  const state = useSelector((state) => state);
  const faq = state.faq;
  const [filtered, setFiltered] = useState();
  const [cardData, setCardData] = useState();


  useEffect(() => {
    let getTitle = title;
    switch (getTitle) {
      case "user":
        setCardData(faq.faq.user);
        break;
      case "payment":
        setCardData(faq.faq.user);
        break;
      case "security":
        setCardData(faq.faq.user);
        break;
      default:
        null;
    }
    // let check = cardData.filter((item) => item.title === title)
    // console.log(check);
  }, [faq]);

  useEffect(() => {
    // console.log(cardData.map(item => console.log(item)))
  }, [cardData])

  return (
    <div className="Faq-Card-container">
      <div className="faq-card-content">
        <i className="faq-card-icon">{icon}</i>
        <span>{text}</span>
      </div>
    </div>
  );
}
