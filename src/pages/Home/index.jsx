import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  return (
    <>
      <h1>Pagina de Home</h1>
      {products.map((producto) => (
        <li key={producto.id}>{producto.name}</li>
      ))}
    </>
  );
}
