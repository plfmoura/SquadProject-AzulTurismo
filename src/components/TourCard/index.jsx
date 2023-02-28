import React from "react";
import style from './tourCard.module.css'

function TourCard({ title, location, image, price }) {
  return (
    <div className={style.cardContainer}>
      <img src={image} alt={title}/>
      <div>
        <p>{title}</p>
        <p>{location}</p>
        <p>R${price} /pessoa</p>
      </div>
    </div>
  );
}

export default TourCard;