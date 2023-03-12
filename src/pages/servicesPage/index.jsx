import React, { useContext, useEffect, useState } from "react";
import style from "./services.module.css";
import Button from "../../components/Button";
import { NavBarContext } from "../../context/NavBarContext";

export default function ServicesPage() {
  const { setBgColor } = useContext(NavBarContext);
  // Para pegar a posição do Menu e alterar conforme a posição da página 
  const [ position, setPosition] = useState()

  useEffect(() => {
    // Subir a página após trocar de páginas 
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
  function updatePosition() {
      setPosition(window.scrollY)
  };

  window.addEventListener('scroll', updatePosition);
  updatePosition();
  // condicional para mostrar de acordo com o valor mesmo que ele volte a 0 novamente 
  let checkBgPosition = position > 250 ? setBgColor(true) : setBgColor(false)

  return () => window.removeEventListener('scroll', updatePosition);
  }, [position]);

  return (
    <div className={style.servConteiner} >
      <header className={style.fundobanner}>
        <div className={style.titleContainer}>
          <p>Confira</p>
          <span>Nossos</span>
          <p>Serviços</p>
        </div>
        <div className={style.serviceBackground}>
          <img src="/src/assets/serviceImg/rioimage.png" />
        </div>
      </header>
      <section className={style.fotografoContainer}>
        <div className={style.fotoConteudo}>
          <article className={style.fotoContent}>
            <h1>Time de Fotógrafos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              sed culpa fuga exercitationem saepe perferendis? Recusandae amet
              excepturi porro soluta numquam, officia suscipit ipsa commodi
              itaque hic tempora, totam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum praesentium dignissimos eius
              quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa
              quaerat dolore harum cum ratione accusamus a consectetur nisi!
            </p>
            <Button className={style.btnFoto} text="Saiba mais..."/>
            <div className={style.pictureEstilo}>
              <img
                src="https://www.maladeaventuras.com/wp-content/uploads/2018/12/DSC7078.jpg"
              />
            </div>
          </article>
        </div>
      </section>
      <section className={style.servContent}>
        <div className={style.textoConteudo}>
          <article>
            <h1>Guias Túristicos</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              sed culpa fuga exercitationem saepe perferendis? Recusandae amet
              excepturi porro soluta numquam, officia suscipit ipsa commodi
              itaque hic tempora, totam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum praesentium dignissimos eius
              quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa
              quaerat dolore harum cum ratione accusamus a consectetur nisi!
            </p>
            <Button className={style.btnGuia} text="Saiba mais..." bgColor='#fff' color='#000'/>
            <div className={style.lisingConteudo}>
              <img
                src="https://www.vidadeturista.com/wp-content/uploads/2016/05/guia-de-turismo-profissao.jpg"
              />
            </div>
          </article>
        </div>
      </section>
      <section className={style.fotografoContainer}>
        <div className={style.fotoConteudo}>
          <article className={style.fotoContent}>
            <h1>Culinária Carioca</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              sed culpa fuga exercitationem saepe perferendis? Recusandae amet
              excepturi porro soluta numquam, officia suscipit ipsa commodi
              itaque hic tempora, totam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum praesentium dignissimos eius
              quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa
              quaerat dolore harum cum ratione accusamus a consectetur nisi!
            </p>
            <Button className={style.btnFoto} text="Saiba mais..." />
            <div className={style.pictureEstilo}>
              <img
                src="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=2000"
              />
            </div>
          </article>
        </div>
      </section>
      <section className={style.servContent}>
        <div className={style.textoConteudo}>
          <article>
            <h1>Frota de Transporte</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
              sed culpa fuga exercitationem saepe perferendis? Recusandae amet
              excepturi porro soluta numquam, officia suscipit ipsa commodi
              itaque hic tempora, totam atque. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Laborum praesentium dignissimos eius
              quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa
              quaerat dolore harum cum ratione accusamus a consectetur nisi!
            </p>
            <Button className={style.btnGuia} text="Saiba mais..." bgColor='#fff' color='#000'/>
            <div className={style.lisingConteudo}>
              <img
                src="https://blog.123milhas.com/wp-content/uploads/2023/01/10-Dicas-para-uma-viagem-de-onibus-segura-conexao123.jpg"
              />
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
