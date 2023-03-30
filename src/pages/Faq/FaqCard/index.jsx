import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./faqCard.css";

export default function FaqCard({ title, text, icon, onPress }) {
  const state = useSelector((state) => state);
  const { faq } = state.faq;
  const [filtered, setFiltered] = useState();

  useEffect(() => {
    if (faq) {
      let myFaq = faq.filter((item) => item.title === title);
      setFiltered(myFaq);
      console.log(myFaq);
    }
  }, [faq]);

  return (
    <div
      className="Faq-Card-container"
      onClick={() => {
        onPress;
      }}
    >
      <div className="faq-card-content">
        <i className="faq-card-icon">{icon}</i>
        <span>{text}</span>
      </div>
    </div>
  );
}
