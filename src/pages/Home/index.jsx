import React from "react";
import { useDispatch, useSelector } from "react-redux";
import style from './home.module.css'

export default function Home() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  return (
    <div className="Home" style={{color: "#fff"}}>
    <div className={style.background}>
      <div className={style.titleContainer}>
        <p>Conheça o</p>
        <span>RIO</span>
        <p>com nossos</p>
        <span>Roteiros</span>
      </div>
      <div className={style.creativeContainer}>
        <img src="/src/assets/home/men.png" alt="" />
      </div>
    </div>
      <h1>Pagina de Home</h1>
      {products.map((producto) => (
        <li key={producto.id}>{producto.name}</li>
      ))}
    </div>
  );
}
