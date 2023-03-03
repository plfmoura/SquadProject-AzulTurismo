import React, { useState } from 'react'
import style from './aboutUs.module.css'


export default function About() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar o formulário para o servidor
    console.log("Enviando mensagem...");
  };
  return (
    // Detalhes da empresa parte A
    <div className={style.aboutContainer}>
      <section className={style.section}>
        <div>
          <h1>Detalhes da empresa</h1>
          <p className={style.des}>
            A nossa empresa atua no mercado desde 2023, sendo especializada em passeios turísticos em todo o Rio de Janeiro.

            Prezamos pela praticidade e excelência na experiência do cliente, com atendimento diferenciado e uma frota preparada para proporcionar a melhor viagem para você, amigos e familiares.

            Nossa equipe tem experiência internacional e realiza treinamentos constantes, o que nos possibilita oferecer os mais altos padrões de atendimento,
            segurança e qualidade, seja em Transportes, Receptivos, City Tours, Transporte Executivo ou VIP.

            Nossa missão é conectar pessoas aos seus destinos para que elas colecionem experiências incríveis e belas recordações!
          </p>
        </div>
        <form onSubmit={handleSubmit} className={style.form}>
        <h2>Fale conosco</h2>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Telefone:
            <input
              type="tel"
              value={telefone}
              onChange={(event) => setTelefone(event.target.value)}
            />
          </label>
          <br />
          <label>
            Mensagem:
            <textarea
              value={mensagem}
              onChange={(event) => setMensagem(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Enviar mensagem</button>
        </form>
      </section>

    </div>
  )
}
