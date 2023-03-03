import React from 'react'
import style from './aboutUs.module.css'

export default function About() {
  return (
    // Detalhes da empresa parte A
    <div className={style.aboutContainer}>
      <section className={style.section}>
        <div>
          <h1>Detalhes da empresa</h1>
          <p>
            A nossa empresa atua no mercado desde 2023, sendo especializada em passeios turísticos em todo o Rio de Janeiro.

            Prezamos pela praticidade e excelência na experiência do cliente, com atendimento diferenciado e uma frota preparada para proporcionar a melhor viagem para você, amigos e familiares.

            Nossa equipe tem experiência internacional e realiza treinamentos constantes, o que nos possibilita oferecer os mais altos padrões de atendimento,
            segurança e qualidade, seja em Transportes, Receptivos, City Tours, Transporte Executivo ou VIP.

            Nossa missão é conectar pessoas aos seus destinos para que elas colecionem experiências incríveis e belas recordações!
          </p>
        </div>
        <form action="" className={style.form}>
          <h2>Fale conosco</h2>

        </form>
      </section>

    </div>
  )
}
