import styles from "../../components/Rodape/rodape.module.css";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CardsFlags from "./CardsFlags";
import { FooterContext } from "../../context/FooterContext";

function Rodape() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [shotcuts, setShotcuts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setShotcuts(products.map((item) => item.name));
  }, [products]);

  return (
    <footer className={styles.footerContainer}>
      <h2>Explore outras opções em Rio de Janeiro</h2>
      <div className={styles.rodaList}>
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
      <hr style={{ width: "80%", margin: "1rem auto", color: "#3333355" }} />
      <div className={styles.textoFinal}>
        <CardsFlags />
        <div className={styles.alignShotcuts}>
          <p>&copy; 2023 Azul Turismo, inc.</p>
          <ul className={styles.listaLink}>
            <li>
              <a href="#">Privacidade</a>
            </li>
            <li>
              <a href="#">Termos</a>
            </li>
            <li>
              <a href="#">Mapa do site</a>
            </li>
            <li>
              <a href="#">Informações da Empresa</a>
            </li>
          </ul>
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

export default Rodape;
