import React, { useState, useEffect } from "react";
import style from "./about.module.css";
import Button from "../../components/Button";
import GoogleMaps from "../../components/GoogleMaps";
import TeamCard from "./TeamCard";
import { developTeam } from "../../services/developTeam";

export default function About() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [data, setData] = useState([])

  useEffect(() => {
    setData(developTeam)
  }, []);


    // developTeam.map(( item ) => console.log( item ) )
  
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar o formulário para o servidor
    console.log("Enviando mensagem...");
  };
  return (
    // Detalhes da empresa parte A
    <div className={style.aboutContainer}>
      <section className={style.firstSection}>
        <div>
          <h1>Detalhes da empresa</h1>
          <p className={style.description}>
            A nossa empresa atua no mercado desde 2023, sendo especializada em
            passeios turísticos em todo o Rio de Janeiro.
            <br />
            <br />
            Prezamos pela praticidade e excelência na experiência do cliente,
            com atendimento diferenciado e uma frota preparada para proporcionar
            a melhor viagem para você, amigos e familiares.
            <br />
            <br />
            Nossa equipe tem experiência internacional e realiza treinamentos
            constantes, o que nos possibilita oferecer os mais altos padrões de
            atendimento, segurança e qualidade, seja em Transportes, Receptivos,
            City Tours, Transporte Executivo ou VIP.
            <br />
            <br />
            Nossa missão é conectar pessoas aos seus destinos para que elas
            colecionem experiências incríveis e belas recordações!
          </p>
          <h3>Nosso escritório no Porto Maravalley, Rio de Janeiro</h3>
          <div>
            <GoogleMaps 
              lat={-22.897052998253393} 
              long={-43.20352553999137}
              setclass={style.mapsContainer}
            />
            <p>Av. Prof. Pereira Reis, 76 - Santo Cristo, Rio de Janeiro - RJ, 20220-800, Brasil</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={style.formContainer}>
          <h2>Fale conosco</h2>
          <div>
            <label>Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div>
            <label>Telefone</label>
            <input
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </div>
          <div>
            <label>Selecione um setor</label>
            <select
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            >
              <option value="default">...</option>
              <option value="suggestion">Sugestão</option>
              <option value="congratz">Agradecimento</option>
              <option value="forget">Esqueci algo</option>
              <option value="claim">Reclamação</option>
            </select>
          </div>
          <div>
            <label>Mensagem</label>
            <textarea
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
            />
          </div>
          <Button type="submit" text="Enviar mensagem" />
        </form>
      </section>
      <section className={style.secondSection}>
        <h2>Conheça nossa equipe de Design, Marketing e Desenvolvimento de Software.</h2>
        <div className={style.alignCards}> 
       
        { data ?
            ( <>{
                data.map((item) => <TeamCard image={item.image} office={item.office} name={item.name}  /> )
              }</>) : ''                

        }
        </div>
      </section>
    </div>
  );
}
