import React from "react";
import { useNavigate } from "react-router-dom";
import style from './tourCard.module.css'

function TourCard({ id, title, location, image, price }) {
  const navigate = useNavigate();
  return (
    <div className={style.cardContainer} onClick={()=>{
navigate(`/tour/:${id}`)
    }}>
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