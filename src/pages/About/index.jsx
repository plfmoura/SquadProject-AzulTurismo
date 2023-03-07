import React, { useState } from "react";
import style from "./about.module.css";
import Button from "../../components/Button";
import GoogleMaps from "../../components/GoogleMaps";
import TeamCard from "./TeamCard";

export default function About() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [data, setData] = useState([
    {
      id: 1,
      name: "Pedro Moura",
      office: "Desenvolvedor",
      image: "https://avatars.githubusercontent.com/u/107577096?v=4",
    },
    {
      id: 2,
      name: "Juan Pelier",
      office: "Desenvolvedor",
      image: "https://media.licdn.com/dms/image/C4E03AQHG3PNOpAvnMA/profile-displayphoto-shrink_800_800/0/1649721389875?e=1683763200&v=beta&t=x4U4YQSYWEQJvk5RLGnQ63ypkkPxfZk7cLPmOipy9X0",
    },
    {
      id: 3,
      name: "Alvaro Poubel",
      office: "Desenvolvedor",
      image: "https://media.licdn.com/dms/image/D4E03AQHFJt3mPsliQw/profile-displayphoto-shrink_800_800/0/1664886030948?e=1683763200&v=beta&t=QQT1F8m85edTIaJZPAl_C_2g1qnmL9j7BDHutlbIqDg",
    },
    {
      id: 4,
      name: "Natan Brito",
      office: "Desenvolvedor",
      image: "https://media.licdn.com/dms/image/D4D03AQHhjc4tQPmTDw/profile-displayphoto-shrink_800_800/0/1664885495747?e=1683763200&v=beta&t=9I-31Zu1iCDVKZI48IjrscdlJwPwe_MKdKhj5cs9BQU",
    },
    {
      id: 5,
      name: "Guilherme Santos",
      office: "Desenvolvedor",
      image: "https://scontent.fqnv10-1.fna.fbcdn.net/v/t39.30808-6/316310197_2075332655970335_7846852653048967956_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEzU1WJT5hB4YSa5suAbvRdEG04bSTQFR0QbThtJNAVHX1JagOwRYZNXqhih-zSJNCwC3QmBLDPvjRl6gTyh8yQ&_nc_ohc=i7ylCwi7rEAAX_86iH3&_nc_ht=scontent.fqnv10-1.fna&oh=00_AfCMynW1iy_SJ864rjJ28BmSEc4IYipVJjXpndDTVtD5xA&oe=640B478D",
    },
    {
      id: 6,
      name: "Franscico William",
      office: "Desenvolvedor",
      image: "https://media.licdn.com/dms/image/D4D03AQGMEdqBvxHYVA/profile-displayphoto-shrink_800_800/0/1667755495521?e=1683763200&v=beta&t=mwtbsXGZl0_Nf3XI1nh0dCFZGcev8C3i56CFnprhUT0",
    }
  ])

  /*useEffect(() => {
    setData((developTeam.map(item)))
  }, []);*/


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
          ( <>
              {
                data.map((item) => {
                    return(
                      <TeamCard 
                        key={item.id}
                        image={item.image} 
                        office={item.office}
                        name={item.name}  
                      /> 
                      
                    );
                  })
              
              }
          </>) : ''                

        }
        </div>
      </section>
    </div>
  );
}
