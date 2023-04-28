import React, { useContext, useEffect, useState } from "react";
import style from "./FAQ.module.css";
import { IoSearch } from "react-icons/io5";
import OffCanvas from "./OffCanvas";
import { NavBarContext } from "../../context/NavBarContext";
import PreLoader from "../../components/PreLoader";
import { dataFaq } from "../../services/faq";
import axios from "axios";
import {
  FaUserCog,
  FaRegCheckSquare,
  FaRegCreditCard,
  FaRegComments,
} from "react-icons/fa";
import FaqCard from "./FaqCard";
import Question from "./Questions";


import { keyWorldTracker } from "../../services/keyWordTracker";
import { useSelector } from "react-redux";

export default function Faq() {
  // OVERLAY
  const { setBgColor, setPaymentFooter, showOffCanvas, setShowOffCanvas } =
    useContext(NavBarContext);
  const [getData, setGetData] = useState(dataFaq);
  const [dataBtn, setDataBtn] = useState();
  const state = useSelector((state) => state);
  const { faq } = state.faq;
  const { user } = state.user;
  const [pesquisa,setPesquisa] = useState("")

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(1, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
    // para alterar estilização do footer caso venha direto da página de payment
    setPaymentFooter(false);
  }, []);

  //  FUNÇAO DE CLICK do search
  const BtnSearch = () => {
    // pega os dados do input de pesquisa e transforma em minusculas para melhor manipulação
    const verificar = DataInput.data.toLocaleLowerCase();
    // em toda pesquisa zera a state que será manipulada para a primeira rota por default

    // para abrir o OffCanvas ao final se nossa buscar encontrar um resultado no Tracker
    const foundWord = () => {
      setTimeout(() => {
        setLoading(false);
        setShowOffCanvas(true);
      }, [1000]);
    };

    // retorno do nosso BOT Tracker
    let filteredWord = keyWorldTracker(verificar);
    // utilizando o retorno para filtrar a rota que irá ser manipulada dentro da state(array)
    switch (filteredWord) {
      case "usuarios":
        setValueBtn("usuario");
        //fazer o filtro pra pegar as faq correspondentes com suas palabras chaves
        let userFaq = faq.filter((item) => item.title.includes("Usuário"));
        setDataBtn(userFaq);
        foundWord();
        setPesquisa("")
        break;
      case "pagamentos":
        setValueBtn("pagamento");
        //fazer o filtro
        let pagFaq = faq.filter((item) => item.title.includes("pagamento"));
        setDataBtn(pagFaq);
        foundWord();
        setPesquisa("")
        break;
      case "seguranças":
        setValueBtn("seguranca");
        let secFaq = faq.filter((item) => item.title.includes("segurança"));
        setDataBtn(secFaq);
        foundWord();
        setPesquisa("")
        break;
        case "Nada":
          setPesquisa("Por favor digite algo...")
         break; 
        case "Erro":
          setPesquisa("Desculpe-nos, não conseguimos encontrar sua pergunta")
        break; 
      default:
        // caso não encontre, finaliza a função
        return;
    }
  };

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
  }, [showOffCanvas]);

  const submitDuvida = async (e) => {
    e.preventDefault();
    let duvida = e.target.duvida.value;
    let id_user = user.user_id;
    let name_user = user.name;
    let token = JSON.parse(localStorage.getItem("token"));
    let date = new Date().toLocaleDateString("pt-br").replace(/\//g, "-");
    e.target.reset();
    const options = {
      method: "POST",
      url: "https://tourismapi.herokuapp.com/duvida",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${token}`,
      },
      data: {
        data_question: `${date}`,
        question: `${duvida}`,
        data_response: "",
        response: "",
        id_user: `${id_user}`,
        title: `duvida do ${name_user}`,
      },
    };
    //Requisiçao de post duvida
    try {
      let response = await axios.request(options);
      if (response.status != "200") {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
      alert("Ops, algo deu errado!");
    }

  };


    
//     let duvida = e.target.duvida.value;

  // STATE DO MEU INPUT
  const [DataInput, setDataInput] = useState({
    data: "",
  });
  // FERIFICAÇAO DO VALOR DO MEU INPUT
  const HandleChange = (e) => {
    setDataInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const [dataFind, setDataFind] = useState();
  const [valueBtn, setValueBtn] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dataBtn) {
      setDataFind(
        dataBtn.find((value) => value.title.toLowerCase() === valueBtn)
      );
    }
  }, [dataBtn]);

  return (
    <>
      {showOffCanvas && (
        <OffCanvas
          children={
            !loading ? (
              <div className={style.overlay}>
                <section className={style.InfoOverlay}>
                  {dataBtn && (
                    <div>
                      {dataBtn[0].title.includes("duvida do") ? (
                        <div className={style.infoDuvidas}>
                          <h1>Envie uma nova dúvida</h1>
                          <form
                            action=""
                            onSubmit={(e) => {
                              let duvida = e.target.duvida.value.length;
                             if(duvida <= 10){
                             submitDuvida(e)
                             }
                             else{
                              alert('Perguntas ate 30 caracteres')
                             }
                            }}
                          >
                            <textarea
                              name=""
                              id="duvida"
                              cols="15"
                              rows="5"
                              placeholder="Digite aqui.."
                              required
                            ></textarea>
                            <br />
                            <input type="submit" value="Enviar"  required/>
                          </form>
                        </div>
                      ) : (
                        <>
                          <h1>{dataBtn[0].title}</h1>
                          <p>
                            fique tranquilo, problemas assim geralmente
                            acontecem, estamos aqui justamente para resolve-los
                            da melhor maneira.
                          </p>
                          <h3>Atenciosamente Equipe </h3>
                        </>
                      )}
                    </div>
                  )}
                </section>
                <section className={style.QuestionsOverlay}>
                  <h3>
                    Caso sua pergunta não esteja aqui, deixe-a em "Suas
                    Duvidas".
                  </h3>
                  {/* Renderizado condicional pra evitar problemas de asincronia dos valores ja atualizados no card */}
                  {dataBtn &&
                    dataBtn.map((item) => (
                      <Question
                        questions={item.question}
                        response={item.response}
                        id={item.id_faq}
                        key={item.id_faq}
                      />
                    ))}
                </section>
              </div>
            ) : (
              <PreLoader />
            )
          }
        />
      )}
      <div className={style.FAQ}>
        <section className={style.InfosFaq}>
          <h1>Olá, precisando de Ajuda?</h1>
          <div className={style.inputSearch}>
            <input
              name="data"
              type="text"
              placeholder="Pesquise..."
              onChange={HandleChange}
            />
            <button type="submit" onClick={BtnSearch}>
              <IoSearch />
            </button>
          </div> 
          <div className={style.Pesquisa}>  <span>{pesquisa}</span></div>
        
        </section>
       
        <section className={style.faqBtnContainer}>
          <FaqCard
            title="Problemas com o Usuário?"
            text="Problemas com Usuário"
            name="payment"
            icon={<FaUserCog />}
            setDataBtn={setDataBtn}
            setLoading={setLoading}
          />
          <FaqCard
            title="Dúvidas de segurança?"
            text="Garantia e Segurança"
            icon={<FaRegCheckSquare />}
            setDataBtn={setDataBtn}
            setLoading={setLoading}
          />

          <FaqCard
            title="Problemas com o pagamento?"
            text="Problemas com o pagamento?"
            icon={<FaRegCreditCard />}
            setDataBtn={setDataBtn}
            setLoading={setLoading}
          />
          <FaqCard
            title="Suas duvidas"
            text="Suas Dúvidas"
            icon={<FaRegComments />}
            setDataBtn={setDataBtn}
            setLoading={setLoading}
          />
        </section>
      </div>
    </>
  );
}
