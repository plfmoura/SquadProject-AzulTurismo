import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./customerCard.module.css";
import CustomerSkeleton from "./CustomerSkeleton";

function CustomerCard({ name, rating, picture, service }) {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();
  const [hover, setHover] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, [2000]);
  }, []);

  return (
    <>
      {skeleton ? (
        <CustomerSkeleton />
      ) : (
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={hover ? ({
            background: `linear-gradient(
              rgba(0,0,0,.3),rgba(0,0,0,.3)
            ), url(${service}) no-repeat center center`,
            backgroundSize: '250%',
            color: "#fff",
            transition: 'all 2s ease'
          }) : ({
            background: `linear-gradient(
              rgba(0,0,0,0),rgba(0,0,0,0)
            ), url(${service}) no-repeat center center`,
            backgroundSize: '300%',
            transition: 'all 2s ease',
            color: "#fff",
          })
          }
          className={style.cardContainer}
        >
          <img src={picture} alt={name} loading="lazy"/>
          <div>
            <p>{rating}</p>
            <p>{name}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default CustomerCard;
