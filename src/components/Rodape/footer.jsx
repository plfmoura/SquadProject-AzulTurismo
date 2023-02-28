import styles from '../../components/Rodape/footer.module.css';
//import { FaFacebookF, FaInstagramSquare, FaYoutube, FaTwitter } from "react-icons/fa";


function rodaPe(){
    return(
        <>
<footer className={styles.estiloRodapé}>
<h1>Explore outras opções em Rio de Janeiro</h1>
<div className={styles.rodapéList}>
<div className={styles.rodapéItem}>
<ul>
<li><a href="">Angra dos Reis</a></li>
<li><a href="">Paraty</a></li>
<li><a href="">Arraial do Cabo</a></li>
 
</ul>
 </div>

 <div className={styles.rodapéItem}>
<ul>
<li><a href="">Angra dos Reis</a></li>
<li><a href="">Paraty</a></li>
<li><a href="">Arraial do Cabo</a></li>
 
</ul>
 </div>

 <div className={styles.rodapéItem}>
<ul>
<li><a href="">Angra dos Reis</a></li>
<li><a href="">Paraty</a></li>
<li><a href="">Arraial do Cabo</a></li>
 
</ul>
 </div>


 <div className={styles.rodapéItem}>
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

export default rodaPe