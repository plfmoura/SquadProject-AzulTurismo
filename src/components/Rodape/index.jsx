import styles from '../../components/Rodape/rodape.module.css';
//import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa";


function Rodape(){
    return(
        <>
<footer className={styles.estiloRodape}>
<h1>Explore outras opções em Rio de Janeiro</h1>
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
  <p>&copy;Azul Tour, inc. <a href="">Privacidade</a> <a href="">Termos</a> <a href="">Mapa do site</a> <a href="">Informações da Empresa</a></p> 
  </div>
    
</footer>
        </>
    )
}

export default Rodape