import styles from '../../components/Rodape/rodape.module.css';
//import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa";


function Rodape(){
    return(
        <>
<footer className={styles.estiloFooter}>
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
  <p>&copy;2023Azul Tour, inc.</p> 
  <div className={styles.textoLink}>
<li><a href="">Privacidade</a></li>
<li><a href="">Termos</a></li> 
<li><a href="">Mapa do site</a></li>  
<li><a href="">Informações da Empresa</a></li> 
  </div>
  <div className={styles.socialFinal}>
<h5></h5>
  </div>
  </div>
    
</footer>
        </>
    )
}

export default Rodape