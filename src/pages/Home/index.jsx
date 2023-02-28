import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TourCard from "../../components/TourCard";
import style from "./home.module.css";
import SearchInput from "./SearchInput";

export default function Home() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;

  return (
    <div className="Home">
      <header className={style.background}>
        <div className={style.titleContainer}>
          <p>Conheça o</p>
          <span>RIO</span>
          <p>com nossos</p>
          <span>Roteiros</span>
        </div>
        <div className={style.creativeContainer}>
          <img src="/src/assets/home/men.png" alt="" />
        </div>
      </header>
      <section className={style.searchInputContainer}>
        <SearchInput />
      </section>
      <section className={style.servicesContainer}>
        <h3>Passeios mais Populares</h3>
        <div className={style.servicesSlider}>
          {products.map((tour) => (
            <TourCard 
              key={tour.id} 
              title={tour.name} 
              location={tour.located} 
              price={tour.price} 
              image={tour.imagens[0]}
              />
            ))
          }
        </div>
        <h3>Passeios em Nome da Região</h3>
        <div className={style.servicesSlider}>
          {products.map((tour) => (
            <TourCard 
              key={tour.id} 
              title={tour.name} 
              location={tour.located} 
              price={tour.price} 
              image={tour.imagens[0]}
              />
            ))
          }
        </div>
      </section>
    </div>
  );
}
