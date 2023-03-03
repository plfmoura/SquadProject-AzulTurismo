import styles from '../../components/Rodape/rodape.module.css';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";

function Rodape(){
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [ shotcuts, setShotcuts] = useState([])

  useEffect(() => {
    setShotcuts(products.map((item) => item.name))
  }, [products])

  useEffect(() => {
    // console.log(shotcuts)
  }, [ shotcuts ])
  
    return(
      <footer className={styles.footerContainer}>
        <h2>Explore outras opções em Rio de Janeiro</h2>
        <div className={styles.rodaList}>
            <ul className={styles.rodaItem}>
              {/* {
                shotcuts && (
                  shotcuts.map((item) =>  <li key={item.id}><a href="#">{item.name}</a></li>)
                  )
              } */}
            </ul>
        </div>
        <div className={styles.textoFinal}>
          <p>&copy;2023Azul Tour, inc.</p> 
          <ul className={styles.textoLink}>
            <li><a href="">Privacidade</a></li>
            <li><a href="">Termos</a></li> 
            <li><a href="">Mapa do site</a></li>  
            <li><a href="">Informações da Empresa</a></li> 
          </ul>
          <div className={styles.socialFinal}>
            <p className={styles.txtFim}>Portugues(BR) R$BRL</p>
            <div>
              <p className={styles.redeUm}><a href=""><FaFacebookSquare /></a></p>
              <p className={styles.redeDois}><a href=""><FaInstagram /></a></p>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Rodape