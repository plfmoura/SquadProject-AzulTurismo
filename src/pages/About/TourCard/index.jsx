import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AboutCardSkeleton from "./aboutCardSkeleton";
import style from './aboutCard.module.css'

function AboutCard({ id, title, location, image, price }) {
  const [ skeleton, setSkeleton ] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false)
    }, [2000])
  }, [])

  return (
    <>
    {skeleton ? (
      <AboutCardSkeleton />
    ) : (
      <div className={style.cardContainer} onClick={()=>{
        navigate(`/tour/:${id}`)
      }}>
        <img src={image} alt={title} loading="lazy"/>
        <div>
          <p>{title}</p>
          <p>{location}</p>
          <p><span>R${price} </span>/pessoa</p>
        </div>
      </div>
    )}
    </>
  );
}

export default TourCard;