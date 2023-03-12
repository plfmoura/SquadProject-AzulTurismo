import React, { useEffect, useState } from "react";
import Card from "./Card";
import style from "./payment.module.css";
import { GrPrevious } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { setUser } from "../../reducer/userReducer";
import axios from "axios";

export default function Payment() {
  let { id, quantity } = useParams();
  const [tour, setTour] = useState();
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const { user } = state.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let selected_id = Number(id.replace(":", ""));
    let selected_tour = products.find((product) => product.id === selected_id);
    setTour(selected_tour);
  }, [products]);

  useEffect(() => {
    if (!user) {
      try {
        let myuser = JSON.parse(localStorage.getItem("azul_user"));
        myuser ? dispatch(setUser(myuser)) : navigate("/");
      } catch (error) {}
    }
    // para subir a pagina após carregamento
    window.scrollTo(0, 0);
  }, []);
  // finalização de compra
  const handleCheckout = async (e) => {
    e.preventDefault();
    let date = new Date().toLocaleDateString("pt-br").replace(/\//g, "-");
    let token = JSON.parse(localStorage.getItem("token"));

    const options = {
      method: "POST",
      url: "http://127.0.0.1:3000/comprar",
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
      data: {
        id_user: `${user.user_id}`,
        id_product: `${tour.id}`,
        data_compra: `${date}`,
        data_tour: `${tour.Date}`,
        tickets: `${Number(quantity.replace(":", ""))}`,
        payment: `${(
          tour.price * Number(quantity.replace(":", "")) -
          tour.price * Number(quantity.replace(":", "")) * 0.1
        ).toFixed(2)}`,
      },
    };
    try {
      let response = await axios.request(options);
      console.log(response.data);
      alert("Compra efetuada!");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Ops, algo deu errado!");
    }
  };

  return (
    <div className={style.paymentContainer}>
      <div className={style.alignContainer}>
        <div className={style.headerContent}>
          <h2>
            <span>
              <GrPrevious />
            </span>
            Confirmar e Pagar
          </h2>
        </div>
        <div className={style.alignContent}>
          <section className={style.paymentContent}>
            <div className={style.tipBanner}>
              <h3>DICA</h3>
              <p>
                Utilize um Cupom e deixe sua compra ainda mais barata! Veja seus
                cupons na área de usuário.
              </p>
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
              <span>{Number(quantity.replace(":", ""))} passe</span>
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
              <Card handleCheckout={handleCheckout} />
            </div>
          </div>
          <section className={style.cartContent}>
            <div className={style.tourContainer}>
              {tour && (
                <div className={style.tourHeader}>
                  <img src={tour.imagens[0]} alt={tour.name} />
                  <div>
                    <h3>{tour.name}</h3>
                    {tour.included.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
              )}
              <hr />
              <p className={style.cartSecure}>
                Seu passe conta com a proteção do seguro{" "}
                <strong>Azul Turismo</strong>
              </p>
              {tour && (
                <div className={style.priceInfo}>
                  <h3>Informações do Valor Final</h3>
                  <div>
                    <p>
                      R$<span>{tour.price}</span> x{" "}
                      <span>{Number(quantity.replace(":", ""))}</span> passes
                    </p>
                    {/* multiplicação da quantidade de passe pelo valor do passeio */}
                    <p>
                      R$
                      <span>
                        {tour.price * Number(quantity.replace(":", ""))}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Desconto Adicionado</p>
                    {/* valor do desconto alterado */}
                    <p>
                      -R$
                      <span>
                        {tour.price * Number(quantity.replace(":", "")) * 0.1}
                      </span>
                    </p>
                  </div>
                  <hr style={{ width: "90%" }} />
                  <div className={style.finalPrice}>
                    <h3>Valor Total (BRL)</h3>
                    <span>
                      R$
                      {(
                        tour.price * Number(quantity.replace(":", "")) -
                        tour.price * Number(quantity.replace(":", "")) * 0.1
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
