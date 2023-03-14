import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./about.module.css";
import Button from "../../components/Button";
import GoogleMaps from "../../components/GoogleMaps";
import TeamCard from "./TeamCard";
import CarouselTeam from "./CarouselTeam";
import { devTeam } from "../../services/devTeam";
import { BsFillTelephoneFill, BsInstagram } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { NavBarContext } from "../../context/NavBarContext";
import { useSelector } from "react-redux";
import axios from "axios";

export default function About() {
  const { setBgColor } = useContext(NavBarContext);
  const [data, setData] = useState([devTeam]);
  const contactForm = useRef();
  const state = useSelector((state) => state);
  const { user } = state.user;

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Aqui você pode enviar o formulário para o servidor
    alert("Obrigado por entrar em contato. Responderemos em breve!!!");
    //enviar mediante axios azultour.atendimentos azultour23@
    const options = {
      method: "POST",
      url: "https://formsubmit.co/ajax/azultour.atendimentos@gmail.com",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: JSON.stringify({
        name: contactForm.current.name.value,
        email: contactForm.current.email.value,
        telephone: contactForm.current.tel.value,
        subject: contactForm.current.subject.value,
        message: contactForm.current.message.value,
      }),
    };
    await axios.request(options);
  };

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    // window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
    //to set the contact form for a loged user
  }, []);
  
  useEffect(() => {
    //to set the contact form for a loged user
    if (user) {
      contactForm.current.name.value = user.name;
      contactForm.current.email.value = user.email;
      contactForm.current.tel.value = user.tel1;
      contactForm.current.name.readOnly = true;
      contactForm.current.email.readOnly = true;
      contactForm.current.tel.readOnly = true;
    }
  }, [user]);

  return (
    // Detalhes da empresa parte A
    <div className={style.aboutContainer}>
      <section className={style.firstSection}>
        <div className={style.description}>
          <article>
            <h1>Detalhes da Azul Tour</h1>
            <p>
              A nossa empresa atua no mercado desde 2023, sendo especializada em
              passeios turísticos em todo o Rio de Janeiro. Prezamos pela
              praticidade e excelência na experiência do cliente, com
              atendimento diferenciado e uma frota preparada para proporcionar a
              melhor viagem para você, amigos e familiares. Nossa equipe tem
              experiência internacional e realiza treinamentos constantes, o que
              nos possibilita oferecer os mais altos padrões de atendimento,
              segurança e qualidade, seja em Transportes, Receptivos, City
              Tours, Transporte Executivo ou VIP. Nossa missão é conectar
              pessoas aos seus destinos para que elas colecionem experiências
              incríveis e belas recordações!
            </p>
          </article>
          <span style={{ visibility: "hidden" }}>Ver mais...</span>
          <img
            src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/parque-lage-rio.jpg"
            alt=""
          />
        </div>
      </section>
      <article className={style.mainContent}>
        <div className={style.ourLocation}>
          <h3>Nosso escritório no Porto Maravalley, Rio de Janeiro</h3>
          <p className={style.mapEndereco}>
            Av. Prof. Pereira Reis, 76 - Santo Cristo, Rio de Janeiro - RJ,
            20220-800, Brasil
          </p>
          <Button text="Fale Conosco" />
        </div>
        <GoogleMaps
          lat={-22.897052998253393}
          long={-43.20352553999137}
          setclass={style.mapsContainer}
        />
      </article>
      <article className={style.ourMission}>
        <div>
          <h2>A visão da empresa</h2>
          <p>
            Ser reconhecida pelos nossos clientes, equipe e fornecedores como
            agência de viagens com inovação e alta tecnologia.
          </p>
          <h2>Valores da Azul</h2>
          <p>
            Comprometimento com os nossos clientes, equipe e parceiros através:
            da confiabilidade pelos serviços prestados, da interação
            interpessoal, da equidade de oportunidades, da simplicidade com
            profissionalismo, da inovação como fortalecimento para o futuro, do
            respeito nas relações comerciais, do sucesso de pessoas e de
            empresas
          </p>
        </div>
        <span style={{ visibility: "hidden" }}>Ver mais...</span>
        <img
          src="https://img.freepik.com/fotos-gratis/equipe-de-negocios-feliz-e-feliz-comemora-vitoria-corporativa_93675-134733.jpg"
          alt=""
        />
      </article>
      <section className={style.contactUs}>
        <div className={style.contactText}>
          <div>
            <p
              style={{
                marginBottom: "1rem",
                fontSize: "18px",
                color: "#20a0ff",
              }}
            >
              FALE CONOSCO
            </p>
            <h2>Como podemos te ajudar?</h2>
            <p style={{ marginTop: "1rem" }}>
              Envie-nos uma mensagem, ou deixe um email.
            </p>
          </div>
          <span>
            <BsFillTelephoneFill /> +55 21 4002-8922
          </span>
          <span>
            <AiOutlineMail /> azultour@gmail.com
          </span>
          <span>
            <BsInstagram /> @azulTourOficial
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className={style.formContainer}
          ref={contactForm}
        >
          <div className={style.firstdiv}>
            <input placeholder="Nome" type="text" required id="name" />
          </div>
          <div>
            <input
              placeholder="Email"
              type="email"
              required
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              id="email"
            />
          </div>
          <div>
            <input placeholder="Telefone" type="tel" id="tel" />
          </div>
          <div>
            <input placeholder="Asunto" type="text" id="subject" />
          </div>
          <div>
            <textarea
              placeholder="Digite sua Mensagem..."
              maxLength="200"
              required
              id="message"
            />
          </div>
          <Button type="submit" text="Enviar mensagem" />
        </form>
      </section>
      <section className={style.teamSection}>
        <div className={style.alignCards}>
          <h2 className={style.secondText}>
            Conheça nossa equipe de Design, Marketing e Desenvolvimento de
            Software.
          </h2>
          {devTeam ? (
            <>
              <CarouselTeam
                setclass={style.carouselTeam}
                children={devTeam.map((item) => {
                  return (
                    <TeamCard
                      key={item.id}
                      image={item.image}
                      office={item.office}
                      name={item.name}
                    />
                  );
                })}
              />
            </>
          ) : (
            ""
          )}
        </div>
        <span style={{ visibility: "hidden" }}>ver mais</span>
        <img src="https://files.fm/thumb_show.php?i=kh5wzx5v5" />
      </section>
    </div>
  );
}
