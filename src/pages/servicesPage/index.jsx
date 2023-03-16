import React, { useContext, useEffect } from "react";
import style from"./services.module.css"; 
import { NavBarContext } from "../../context/NavBarContext";

function ServicePage(){
  const { setBgColor } = useContext(NavBarContext);

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
  }, []);

    return(
    <div className={style.servConteiner}>
        <header className={style.fundobanner}>
            <div className={style.titleContainer}>
            <p>Confira</p>
            <span>Nossos</span>
            <p>Serviços</p>
            </div>
        </header>
        <section className={style.fotografoContainer}>
            <div className={style.fotoConteudo}>
                <article className={style.fotoContent}>
                <h1>Time de Fotógrafos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sed culpa fuga exercitationem saepe perferendis? Recusandae amet excepturi porro soluta numquam, officia suscipit ipsa commodi itaque hic tempora, totam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium dignissimos eius quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa quaerat dolore harum cum ratione accusamus a consectetur nisi!
                    </p>
                    <button className={style.btnFoto}> Saiba Mais..</button>
                    <div className={style.pictureEstilo}>
                        <img src="https://www.maladeaventuras.com/wp-content/uploads/2018/12/DSC7078.jpg" alt="" />
                    </div>
                </article>
            </div>
        </section>
        <section className={style.servContent}>
            <div className={style.textoConteudo}>
                <article>
                    <h1>Guias Túristicos</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sed culpa fuga exercitationem saepe perferendis? Recusandae amet excepturi porro soluta numquam, officia suscipit ipsa commodi itaque hic tempora, totam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium dignissimos eius quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa quaerat dolore harum cum ratione accusamus a consectetur nisi!
                    </p>
                    <button className={style.btnGuia}> Saiba Mais..</button>
                    <div className={style.lisingConteudo}>
                    <img src="https://www.vidadeturista.com/wp-content/uploads/2016/05/guia-de-turismo-profissao.jpg" alt="" />
                    </div>
                </article>
            </div>
        </section>
        <section className={style.culeContainer}>
            <div className={style.culeConteudo}>
                <article className={style.culeContent}>
                <h1>Culinária Carioca</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sed culpa fuga exercitationem saepe perferendis? Recusandae amet excepturi porro soluta numquam, officia suscipit ipsa commodi itaque hic tempora, totam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium dignissimos eius quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa quaerat dolore harum cum ratione accusamus a consectetur nisi!
                    </p>
                    <button className={style.btnComida}> Saiba Mais..</button>
                    <div className={style.culeImage}>
                        <img src="https://img.freepik.com/fotos-gratis/variedade-plana-com-deliciosa-comida-brasileira_23-2148739179.jpg?w=2000" alt="" />
                    </div>

                </article>
            </div>
        </section>
        <section className={style.transContent}>
            <div className={style.transConteudo}>
                <article>
                    <h1>Frota de Transporte</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi sed culpa fuga exercitationem saepe perferendis? Recusandae amet excepturi porro soluta numquam, officia suscipit ipsa commodi itaque hic tempora, totam atque.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum praesentium dignissimos eius quas magni saepe, labore perspiciatis cumque reprehenderit ea ipsa quaerat dolore harum cum ratione accusamus a consectetur nisi!
                    </p>
                    <button className={style.btnTrans}> Saiba Mais..</button>
                    <div className={style.transImage}>
                    <img src="https://blog.123milhas.com/wp-content/uploads/2023/01/10-Dicas-para-uma-viagem-de-onibus-segura-conexao123.jpg" alt="" />
                    </div>
                </article>
            </div>
        </section>
    </div>
    )
}

export default ServicePage