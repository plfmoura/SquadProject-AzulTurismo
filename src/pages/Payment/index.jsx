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
  const [ totalPrice, setTotalPrice ] = useState(0)
  const [ ticketAmount, setTicketAmount ] = useState(0)

  useEffect(() => {
    let selected_id = Number(id.id.replace(":", ""));
    let selected_tour = products.find((product) => product.id === selected_id);
    setTour(selected_tour);
  }, [products]);

  useEffect(() => {
    setTicketAmount(3)
    setTotalPrice(( 100 * ticketAmount).toFixed(2))
  }, [ tour ])

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
          </section>
          <div className={style.cardContainer}>
              <h3>Área de Pagamento</h3>
              <div className={style.cardArea}>
                <Card/> 
                <Button text={'Confirmar Compra'}/>
              </div>
            </div>
          <section className={style.cartContent}>
            <div className={style.tourContainer}>
              {tour &&
                <div className={style.tourHeader}>
                    <img src={tour.imagens[0]} alt={tour.name} />
                    <div>
                      <h3>{tour.name}</h3>
                      {
                        tour.included.map((item) => <p key={item}>{item}</p>)
                      }
                    </div>
                </div>
              }
              <hr />
              <p className={style.cartSecure}>Seu passe conta com a proteção do seguro <strong>Azul Turismo</strong></p>
              <div className={style.priceInfo}>
                <h3>Informações do Valor Final</h3>
                <div>
                  <p>R$<span>130,00</span> x <span>3</span> passes</p>
                  <p>R$<span>690,00</span></p>
                </div>
                <div>
                  <p>Desconto Adicionado</p>
                  <p>-R$<span>69,00</span></p>
                </div>
                <hr style={{width: '90%'}}/>
                <div className={style.finalPrice}>
                  <h3>Valor Total (BRL)</h3>
                  <span>R${totalPrice}</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
