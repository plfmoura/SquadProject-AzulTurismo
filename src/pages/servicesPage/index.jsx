import React, { useContext, useEffect } from "react";
import style from"./services.module.css"; 
import { NavBarContext } from "../../context/NavBarContext";
import Button from "../../components/Button";

function ServicePage(){
  const { setBgColor } = useContext(NavBarContext);

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
  }, []);

    return(
        <div className={style.servPage}>
            <header className={style.fundoPage}>
                <div className={style.contaIner}>
                    <section className={style.banNer}>
                        <div className={style.bannerText}>
                            <p>Confira os Serviços que preparamos especialmente para você!</p>
                            <Button className={style.btnLink} 
                        text="Reservar Tour"/>
                        </div>
                    </section>
                </div>
            </header>
            {/*Primeira sessão wwhite*/}
            <section className={style.guiaBranco}>
                <div className={style.guiaContainer}>
                    <div className="guiaTexto">
                        <h3>Guias Turismo</h3>
                            <p>
                            Possuímos profissionais treinados e qualificados para acompanhar a sua viagem e 
                            transformar seu passeio na melhor experiência possível, digno de uma memória inesquecível.
                             Entre eles, podemos fornecer guias personalizados nos seguintes idiomas: português (obviamente ;-) 
                            inglês, espanhol, alemão, francês, italiano, hebraico, japonês, chinês (mandarim) e grego. 
                            Impressionante, certo? Deixe-nos saber qual é o seu idioma preferido e faremos o possível para encontrar o guia mais adequado para seu tour.
                            </p>
                            <Button className={style.btnBlue} 
                        text="Saiba Mais"/>
                    </div>
                    <div className={style.brancoImage}>
                        <img src="https://www.vidadeturista.com/wp-content/uploads/2016/05/guia-de-turismo-profissao.jpg" alt="" />
                    </div>
                </div>
            </section>
            {/* fim da sessão*/}
            {/*Primeira sessão Blue*/}
            <section className={style.guiaTuristico}>
                <div className={style.guiaContainer}>
                <div className={style.guiaImage}>
                         <img src="http://blog.aboutrio.com.br/wp-content/uploads/2015/09/feijoadap.jpg" alt="" />
                    </div>
                    <div className={style.guiaText}>
                        <h3>Melhores Restaurantes</h3>
                            <p> 
                                Em nossos passeios com parada para almoço, 
                                você irá desfrutar do melhor da culinária carioca nos melhores restaurantes que o rio pode oferecer, prepare seu paladar.
                                Aqui uma recomendação da Azul Tour especialmente para você, que tal experimentar Feijoada Carioca um prato
                                 que encontramos em todos os estados brasileiros, a verdade é que quem provou a feijoada carioca 
                                incontestavelmente garante que é a melhor! Em nossos passeios você vai se deliciar com as comidas típicas do Rio de Janeiro aproveite!
                            </p>
                            <Button className={style.btnGuia} 
                        text="Saiba Mais"/>
                    </div>
                </div>
            </section>
            {/*fim segunda sessão*/}
            {/* Segunda sessão White*/}
            <section className={style.guiaBranco}>
                <div className={style.guiaContainer}>
                    <div className={style.guiaTexto}>
                        <h3>Transporte</h3>
                            <p> A Nossa frota possui veículos novos, confortáveis , 
                                totalmente legalizados e seguros . Nossos motoristas são treinados e capacitados. Buscamos você em seu hotel.
                                Nossa frota de veículos é muito mais do que apenas jipes restaurados! Nós temos vans de passageiros Mercedes Vito 7, 
                                uma variedade de carros executivos, vans de 15 e 20 passageiros e ônibus também. 
                                Oferecemos traslados para o aeroporto, para Búzios ou outros destinos e aluguéis diários de carros com motorista. 
                                Tudo pode estar disponível mediante a sua solicitação.
                            </p>
                            <Button className={style.btnBlue} 
                        text="Saiba Mais"/>
                    </div>
                    <div className={style.brancoImage}>
                        <img src="https://www.otempo.com.br/image/contentid/policy:1.2765706:1668340122/frota-5-jpg.jpg?f=3x2&w=1224" alt="" />
                    </div>
                </div>
            </section>
            {/*fim sessão*/}
            {/*segunda sessão Blue*/}
            <section className={style.guiaTuristico}>
                <div className={style.guiaContainer}>
                <div className={style.guiaImage}>
                        <img src="https://www.ilhagrande.com.br/wp-content/uploads/2015/06/passeio-barco-lopes-mendes-ilha-grande-41.jpg" alt="" />
                    </div>
                    <div className={style.guiaText}>
                        <h3>Passeios de Barcos</h3>
                            <p> Trabalhamos com as melhores agências
                                de turismo marinho com escunas 100% seguras e com manutenção rigorosamente rígida 
                                para seu maior conforto e segurança.
                                Nossa missão é promover experiências únicas e inesquecíveis na Cidade Maravilhosa.  
                                Seja a bordo de um veleiro ou de outra embarcação escolhida, a garantia é de vistas e paisagens de tirar o fôlego.
                                
                            </p>
                            <Button className={style.btnGuia} 
                        text="Saiba Mais"/>
                    </div>
                </div>
            </section>
            {/*fim da quarta sessão*/}
        </div>
    )
}

export default ServicePage