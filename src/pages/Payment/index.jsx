import React, { useEffect, useState } from 'react'
import Card from './Card'
import Button from '../../components/Button'
import style from './payment.module.css'
import { GrPrevious } from "react-icons/gr";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function Payment() {
  let id = useParams();
  const [tour, setTour] = useState();
  const state = useSelector((state) => state);
  const { products } = state.shopping;

  useEffect(() => {
    let selected_id = Number(id.id.replace(":", ""));
    let selected_tour = products.find((product) => product.id === selected_id);
    setTour(selected_tour);
  }, [products]);

  return (
    <div className={style.paymentContainer}>
      <div className={style.alignContainer}>
        <div className={style.headerContent}>
          <h2><span><GrPrevious/></span>Confirmar e Pagar</h2>
        </div>
        <div className={style.alignContent}>
          <section className={style.paymentContent}>
            <div className={style.tipBanner}>
              <h3>DICA</h3>
              <p>Utilize um Cupom e deixe sua compra ainda mais barata! Veja seus cupons na área de usuário.</p>
            </div>
            <div className={style.buyContent}>
              <h3>Seu passeio</h3>
              <div>
                <label htmlFor="">Data do Passeio</label>
                <span>Alterar</span>
              </div>
                <span>00/00/00</span>
              <div>
                <label htmlFor="">Número de Passes selecionados</label>
                <span>Alterar</span>
              </div>
                <span>3 pessoas</span>
            </div>
            <hr />
            <div className={style.couponContainer}>
              <h3>Inserir Cupom</h3>
              <span>CUPOM10%</span>
            </div>
            <hr />
            <div className={style.cardContainer}>
              <h3>Área de Pagamento</h3>
              <div className={style.cardArea}>
                <Card/> 
                <Button text={'Confirmar Compra'}/>
              </div>
            </div>
          </section>
          <section className={style.cartContent}>
            <div className={style.tourContainer}>
              <div className={style.tourHeader}>
                <img src="" alt="" />
                <div>Nome do Passeio</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
