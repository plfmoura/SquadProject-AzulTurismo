import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourCardSkeleton from "./TourCardSkeleton";
import style from './tourCard.module.css'
import { AiFillStar } from 'react-icons/ai';

function TourCard({ id, title, location, image, price, rating }) {
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
      <TourCardSkeleton />
    ) : (
      <div className={style.cardContainer} onClick={()=>{
        navigate(`/tour/:${id}`)
      }}>
        <img src={image} alt={title} loading="lazy"/>
        <div>
          <div className={style.cardTitle}>
            <p>{title}</p>
            <p><span><AiFillStar /></span>{rating}</p>
          </div>
          <div className={style.cardOverView}>
            <p>{location}</p>
            <p><span>R${price} </span>/pessoa</p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}

export default TourCard;