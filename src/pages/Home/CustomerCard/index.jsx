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
          className={style.cardContainer}
          style={hover ? ({
            transition: '0.3s',
            backgroundImage: `url(${service})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            color: "#fff",
          }) : ({
            backgroundColor: "#777",
            color: "#222",
          })
          }
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
