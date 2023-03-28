import React, { useContext, useEffect, useRef, useState } from "react";
import style from "./FAQ.module.css";
import { IoSearch } from "react-icons/io5";
import OffCanvas from "./OffCanvas";
import { NavBarContext } from "../../context/NavBarContext";
import axios from "axios";
import PreLoader from "../../components/PreLoader";
import { dataFaq } from "../../services/faq";
import { FaUserCog, FaRegCheckSquare, FaRegCreditCard, FaRegComments } from "react-icons/fa";
import FaqCard from "./FaqCard";

const index = () => {
  // OVERLAY
  const { setBgColor, setPaymentFooter, showOffCanvas, setShowOffCanvas } = useContext(NavBarContext);
  const [getData, setGetData] = useState(dataFaq);

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página
    setBgColor(true);
    // para alterar estilização do footer caso venha direto da página de payment
    setPaymentFooter(false);    

    setGetData(dataFaq)
  }, []);


  // STATE DOS MEUS BUTTONS
  const [DataBtn, setDataBtn] = useState();

   const ConsultaApi = (URL) =>{
    axios.get(`http://localhost:3000/${URL}`)
    .then(function (response) {
      setDataBtn(response.data)
    })
    .catch(function (error) {
      console.log(error);
    }),[]
  }

  //  FUNÇAO DE CLICK do search
  const BtnSearch = () => {
    const verificar = DataInput.data.toLocaleLowerCase();
    setGetData(dataFaq)
      
    if (verificar == "") {
      alert("digite algo");
    } else if (verificar.includes("usuario") == true) {
      setValueBtn('usuario');
      setDataBtn(getData.user);
      setTimeout(() => {
        setLoading(false);
      }, [2000]);
      setShowOffCanvas(true);
    } else if (verificar.includes("usuarios") == true) {
      setShowOffCanvas(true);
      ConsultaApi("Usuario");
    } else if (verificar.includes("pagamentos") == true) {
      setShowOffCanvas(true);
      ConsultaApi("Pagamento");
    } else if (verificar.includes("pagamento") == true) {
      console.log("fazendo a req a tabela pagamento");
      setShowOffCanvas(true);
      ConsultaApi("Pagamento");
    } else if (verificar.includes("garantias") == true) {
      console.log("fazendo a req a tabela Garantias e segurança");
      setShowOffCanvas(true);
      ConsultaApi("seguranca");
    } else if (verificar.includes("garantia") == true) {
      console.log("fazendo a req a tabela Garantias e segurança");
      setShowOffCanvas(true);
      ConsultaApi("seguranca");
    } else if (verificar.includes("segurança") == true) {
      console.log("fazendo a req a tabela Garantias e segurança");
      setShowOffCanvas(true);
      ConsultaApi("seguranca");
    } else {
      console.log("Nao sou capaz de responder sua pergunta!");
    }
  };
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

  // FUNCTION CLICK BTN
  const handleSelect = (e) => {
    setGetData(dataFaq)
    // colocando valor do btn para a variavel
    let getBtnValue = e.target.name;
    setValueBtn(getBtnValue);
    // carregamento até mostrar a pesquisa
    setTimeout(() => {
      setLoading(false);
    }, [2000]);
    setShowOffCanvas(true);
    // consulta o valor do target
    switch (getBtnValue) {
      case "usuario":
        setDataBtn(getData.user);
        break;
      case "pagamento":
        setDataBtn(getData.payment);
        break;
      case "seguranca":
        setDataBtn(getData.security);
        break;
      default:
        null;
    }
  };

  useEffect(() => {
    if (DataBtn) {
      setDataFind(
        DataBtn.find((value) => value.title.toLowerCase() === valueBtn)
      );
    }
  console.log(DataBtn)

  }, [DataBtn]);

  return (
    <>
      {showOffCanvas && (
        <OffCanvas
          children={
            !loading ? (
              <div>
                {dataFind && (
                  <div>
                    <h1 style={{ color: "#f00" }}>{dataFind.title}</h1>
                  </div>
                )}
                {DataBtn &&
                  DataBtn.map((item, key) => (
                    <div key={key}>
                      <h1>{item.title}</h1>
                    </div>
                  ))}
              </div>
            ) : (
              <PreLoader />
            )
          }
        />
      )}
      <div className={style.FAQ}>
        <section className={style.InfosFaq}>
          <h1>Ola! Precisando de Ajuda?</h1>
          <div className={style.inputSearch}>
            <input
              name="data"
              type="text"
              placeholder="Deixe aqui sua duvida..."
              onChange={HandleChange}
            />
            <button type="submit" onClick={BtnSearch}>
              <IoSearch />
            </button>
          </div>
        </section>
        <section className={style.BtnFAQ}>
          {/* <FaqCard title='user'/>
          <FaqCard title='payment'/>
          <FaqCard title='security'/> */}
          <button className={style.btnClick} name="usuario" onClick={handleSelect} style={{backgroundColor: 'red'}}>
            <i className={style.iconFaq} style={{backgroundColor: 'green', pointerEvents: 'none', backgroundColor: 'green'}}>
              <FaUserCog />
            </i>
            <span style={{pointerEvents: 'none'}}>Problemas com Úsuario</span>
          </button>
          <button className="Btn" name="seguranca" onClick={handleSelect}>
             <i className={style.iconFaq} style={{pointerEvents: 'none'}}>
              <FaRegCheckSquare />
            </i>
            <span style={{pointerEvents: 'none'}}>Garantias e Seguranças</span>
          </button>
          <button className="Btn" name="pagamento" onClick={handleSelect}>
          <i className={style.iconFaq}>
              <FaRegCreditCard />
            </i>
            <span>Pagamentos</span>
          </button>
          <button className="Btn" name="seguranca" onClick={handleSelect}>
          <i className={style.iconFaq}>
              <FaRegComments />
            </i>
            <span>Suas Duvidas</span>
          </button>
        </section>
      </div>
    </>
  );
};

export default index;
