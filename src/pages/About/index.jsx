import React, { useEffect, useState } from "react";
import style from "./about.module.css";
import Button from "../../components/Button";
import GoogleMaps from "../../components/GoogleMaps";
import TeamCard from "./TeamCard";
import CarouselTeam from './CarouselTeam'
import { devTeam } from "../../services/devTeam";
import { BsFillTelephoneFill, BsInstagram } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

export default function About() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [data, setData] = useState([devTeam])

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar o formulário para o servidor
  };

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [])

  return (
    // Detalhes da empresa parte A
    <div className={style.aboutContainer}>
      <section className={style.firstSection}>
        <div className={style.description}>
          <article>
            <h1>Detalhes da Azul Tour</h1>
            <p >
              A nossa empresa atua no mercado desde 2023, sendo especializada em
              passeios turísticos em todo o Rio de Janeiro.
              Prezamos pela praticidade e excelência na experiência do cliente,
              com atendimento diferenciado e uma frota preparada para proporcionar
              a melhor viagem para você, amigos e familiares.
              Nossa equipe tem experiência internacional e realiza treinamentos
              constantes, o que nos possibilita oferecer os mais altos padrões de
              atendimento, segurança e qualidade, seja em Transportes, Receptivos,
              City Tours, Transporte Executivo ou VIP.
              Nossa missão é conectar pessoas aos seus destinos para que elas
              colecionem experiências incríveis e belas recordações!
            </p>
          </article>
          <span style={{visibility: 'hidden'}}>Ver mais...</span>
          <img src="https://www.melhoresdestinos.com.br/wp-content/uploads/2019/08/parque-lage-rio.jpg" alt="" />
        </div>
      </section>
      <article className={style.mainContent}>
        <div className={style.ourLocation}>
          <h3>Nosso escritório no Porto Maravalley, Rio de Janeiro</h3>
          <p className={style.mapEndereco}>Av. Prof. Pereira Reis, 76 - Santo Cristo, Rio de Janeiro - RJ, 20220-800, Brasil</p>
          <Button text='Fale Conosco' />
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
          <p>Ser reconhecida pelos nossos clientes, equipe e 
          fornecedores como agência de viagens com inovação e alta tecnologia.
          </p>
          <h2>Valores da Azul</h2>
          <p>Comprometimento com os nossos clientes, equipe e 
            parceiros através:
            da confiabilidade pelos serviços prestados,
            da interação interpessoal,
            da equidade de oportunidades,
            da simplicidade com profissionalismo,
            da inovação como fortalecimento para o futuro,
            do respeito nas relações comerciais,
            do sucesso de pessoas e de empresas
          </p>
        </div>
        <span style={{visibility: 'hidden'}}>Ver mais...</span>
        <img src="https://img.freepik.com/fotos-gratis/equipe-de-negocios-feliz-e-feliz-comemora-vitoria-corporativa_93675-134733.jpg" alt="" />
      </article>
      <section className={style.contactUs}>
        <div className={style.contactText}>
          <div>
            <p style={{marginBottom: '1rem', fontSize: '18px', color: '#20a0ff'}}>FALE CONOSCO</p>
            <h2>Como podemos te ajudar?</h2>
            <p style={{marginTop: '1rem'}}>Envie-nos uma mensagem, ou deixe um email.</p>
          </div>
          <span><BsFillTelephoneFill /> +55 21 4002-8922</span>
          <span><AiOutlineMail /> azultour@gmail.com</span>
          <span><BsInstagram /> @azulTourOficial</span>
        </div>
        <form onSubmit={handleSubmit} className={style.formContainer}>
          <div>
            <input placeholder="Nome
            "
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div>
            <input placeholder="Email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <input placeholder="Telefone" 
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </div>
          <div>
            <textarea placeholder="Digite sua Mensagem..."
              value={mensagem}
              maxLength='200'
              onChange={(event) => setMensagem(event.target.value)}
            />
          </div>
          <Button type="submit" text="Enviar mensagem" />
        </form>
      </section>
      <section className={style.teamSection}>
        <div className={style.alignCards}>
        <h2 className={style.secondText}>Conheça nossa equipe de Design, Marketing e Desenvolvimento de Software.</h2>
        { devTeam ?
          ( <>
            <CarouselTeam 
              setclass={style.carouselTeam}
              children={
                devTeam.map((item) => {
                    return(
                      <TeamCard
                        key={item.id}
                        image={item.image}
                        office={item.office}
                        name={item.name}  
                      />
                    );
                  })
               }/>
          </>) : ''                
        }
        </div>
        <span style={{visibility: 'hidden'}}>ver mais</span>
        <img src="https://files.fm/thumb_show.php?i=kh5wzx5v5"/>
      </section>
    </div>
  );
}
