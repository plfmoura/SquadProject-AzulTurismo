import styles from '../../components/Rodape/rodape.module.css';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

  function Rodape(){
    const state = useSelector((state) => state);
    const { products } = state.shopping;
    const [ shotcuts, setShotcuts] = useState([])
   
    useEffect(() => {
      setShotcuts(products.map((item) => item.name));
    }, [products])

    return(
      <footer className={styles.footerContainer}>
        <h2>Explore outras opções em Rio de Janeiro</h2>
        <div className={styles.rodaList}>
            <ul className={styles.rodaItem}>
              {
                shotcuts && 
                  shotcuts.slice(0,5).map((item, key) =>  (<li key={key}><a href="#">{item}</a></li>))
              }
            </ul>
            <ul className={styles.rodaItem}>
              {
                shotcuts && 
                  shotcuts.slice(6,10).map((item, key) =>  (<li key={key}><a href="#">{item}</a></li>))
              }
            </ul>
            <ul className={styles.rodaItem}>
              {
                shotcuts && 
                  shotcuts.slice(11,16).map((item, key) =>  (<li key={key}><a href="#">{item}</a></li>))
              }
            </ul>
        </div>
        <div className={styles.textoFinal}>
          <ul className={styles.textoLink}>
            <p>&copy;2023Azul Tour, inc.</p> 
            <li><a href="#">Privacidade</a></li>
            <li><a href="#">Termos</a></li> 
            <li><a href="#">Mapa do site</a></li>  
            <li><a href="#">Informações da Empresa</a></li> 
          </ul>
          <div className={styles.socialFinal}>
            <p className={styles.txtFim}>Portugues(BR) R$BRL</p>
            <div className={styles.txtLink}>
              <p className={styles.redeUm}><a href="#"><FaFacebookSquare /></a></p>
              <p className={styles.redeDois}><a href="#"><FaInstagram /></a></p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Rodape