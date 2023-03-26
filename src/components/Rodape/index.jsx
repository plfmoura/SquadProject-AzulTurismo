import styles from "../../components/Rodape/rodape.module.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardsFlags from "./CardsFlags";
import { NavBarContext } from "../../context/NavBarContext";

export default function Rodape() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [shotcuts, setShotcuts] = useState([]);
  const navigate = useNavigate();
  const { paymentFooter, alignPaymentShotcuts } = useContext(NavBarContext)
  
  useEffect(() => {
    setShotcuts(products.map((item) => item.name));
  }, [products]);

  return (
    <footer className={styles.footerContainer}>
      {/* verifica se estamos na página de pagamento, caso sim, não exibirá os atalhos */}
      {!paymentFooter &&
      <>
        <h2>Explore outras opções em Rio de Janeiro</h2>
        <div className={styles.rodaList} style={{textAlign: 'center'}}>
          <ul className={styles.rodaItem}>
            {shotcuts &&
              shotcuts.slice(0, 5).map((item, key) => (
                <li key={key}
                  onClick={() => { navigate("/"); }}
                >
                  <a>{item}</a>
                </li>
              ))}
          </ul>
          <ul className={styles.rodaItem}>
            {shotcuts &&
              shotcuts.slice(6, 10).map((item, key) => (
                <li key={key}
                  onClick={() => { navigate("/"); }}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
          </ul>
          <ul className={styles.rodaItem}>
            {shotcuts &&
              shotcuts.slice(11, 16).map((item, key) => (
                <li key={key}
                  onClick={() => { navigate("/"); }}
                >
                  <a href="#">{item}</a>
                </li>
              ))}
          </ul>
        </div>
      <hr style={{ width: "80%", margin: "2rem auto 0", color: "#33333335" }} />
      </>
      }
      <div className={styles.textoFinal}>
        {/* verifica se estamos na página de pagamento, caso sim, exibirá as formas de pagamento aceitas com cartão */}
        {paymentFooter &&
          <CardsFlags />
        }
        <div className={styles.alignShotcuts} style={{justifyContent: alignPaymentShotcuts}}>
          <p>&copy; 2023 Azul Turismo, inc.</p>
          {!paymentFooter &&
            <ul className={styles.listaLink}>
              <li>
                <a href="#">Privacidade</a>
              </li>
              <li>
                <a href="#">Termos</a>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <a href="#">Informações da Empresa</a>
              </li>
            </ul>
          }
        </div>
        <div className={styles.socialFinal}>
          <p>Portugues(BR) R$BRL</p>
          <div className={styles.socialItem}>
            <a href="#">
              <FaFacebookSquare />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}