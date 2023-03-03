import styles from '../../components/Rodape/rodape.module.css';
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";


function Rodape() {
  return (


    <footer className={styles.estiloFooter}>
      <h1 className={styles.rodaTitle}>Explore outras opções em Rio de Janeiro</h1>
      <div className={styles.rodaList}>
        <div className={styles.rodaItem}>
          <ul>
            <li><a href="">Angra dos Reis</a></li>
            <li><a href="">Paraty</a></li>
            <li><a href="">Arraial do Cabo</a></li>
          </ul>
        </div>

        <div className={styles.rodaItem}>
          <ul>
            <li><a href="">Angra dos Reis</a></li>
            <li><a href="">Paraty</a></li>
            <li><a href="">Arraial do Cabo</a></li>
          </ul>
        </div>

        <div className={styles.rodaItem}>
          <ul>
            <li><a href="">Angra dos Reis</a></li>
            <li><a href="">Paraty</a></li>
            <li><a href="">Arraial do Cabo</a></li>

          </ul>
        </div>


        <div className={styles.rodaItem}>
          <ul>
            <li><a href="">Angra dos Reis</a></li>
            <li><a href="">Paraty</a></li>
            <li><a href="">Arraial do Cabo</a></li>

          </ul>
        </div>


      </div>

      <div className={styles.textoFinal}>
        <p>&copy;2023Azul Tour, inc.</p>
        <div className={styles.textoLink}>
          <li><a href="">Privacidade</a></li>
          <li><a href="">Termos</a></li>
          <li><a href="">Mapa do site</a></li>
          <li><a href="">Informações da Empresa</a></li>
        </div>
        <div className={styles.socialFinal}>
          <p className={styles.txtFim}>Portugues(BR) R$BRL</p>
          <div className={styles.socialItem}>
            <p className={styles.redeUm}><a href=""><FaFacebookSquare /></a></p>
          </div>
          <div className={styles.socialItem}>
            <p className={styles.redeDois}><a href=""><FaInstagram /></a></p>
          </div>
        </div>
      </div>

    </footer>

  )
}

export default Rodape