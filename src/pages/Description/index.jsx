import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./description.module.css";
import UserPicture from "../../assets/profile/user.jpg";

export default function Description() {
  let id = useParams();
  const [tour, setTour] = useState([]);
  const state = useSelector((state) => state);
  const { products } = state.shopping;

  useEffect(() => {
    let selected_id = Number(id.id.replace("tour:", ""));
    let selected_tour = products.find((product) => product.id === selected_id);
    setTour(selected_tour);
  }, []);

  // console.log(tour.included.map(item => item))

  return (
    <div className={style.singleServiceContainer}>
      <section className={style.serviceMedia}>
        <img src={UserPicture} alt="" />
        <div>
          <img src={UserPicture} alt="" />
          <img src={UserPicture} alt="" />
          <img src={UserPicture} alt="" />
        </div>
      </section>
      <section className={style.serviceDescription}>
        <div className={style.serviceOverView}>
          <h1>{tour.name}</h1>
          <p>{tour.located}</p>
          <div>
            {tour.included.map((item, key) => <p key={key}>{item}</p>)}
          </div>
          <p>{tour.description}</p>
        </div>
        <div className={style.servicePrice}>
          <div>
            <h2>R$<span>{tour.price}</span></h2><p>/pessoa</p>
          </div>
        </div>
      </section>
    </div>
  );
}
