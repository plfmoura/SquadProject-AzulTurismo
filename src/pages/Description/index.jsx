import React, { useEffect, useState } from 'react'
import {useSelector } from "react-redux";
import { useParams } from 'react-router-dom'
import style from './description.module.css'

export default function Description() { 
  let id=useParams();
  const [tour,setTour]=useState([]);
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  useEffect(() => {
   let id_tour=Number(id.id.replace("tour:",""));
   let my_tour=products.find((product)=>product.id===id_tour)
 setTour(my_tour);

}, []);
  return (
    <div className={style.singleService}>
      <div className={style.singleServiceContainer}>
        <h1>{tour.name}</h1>
        <h1>{tour.price}</h1>
      </div>
    </div>
  )
}
