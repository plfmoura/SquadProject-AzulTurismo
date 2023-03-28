import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./faqCard.css";

export default function FaqCard({ title, text, icon }) {
  const state = useSelector((state) => state);
  const faq = state.faq;
  const [filter, setFilter] = useState();

  // useEffect(() => {
  //     let check = faq.filter((item) => item.title === title)
  //     setFilter(check)
  // } ,[])

  return (
    <div className="Faq-Card-container">
      <div className="faq-card-content">
        <i className="faq-card-icon">{icon}</i>
        <span>{text}</span>
      </div>
    </div>
  );
}
