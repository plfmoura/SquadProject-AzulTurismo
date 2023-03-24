import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./description.module.css";
import { teamService } from "../../services/teamService";
import { AiFillStar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import GoogleMaps from "../../components/GoogleMaps";
import BuyForm from "./BuyForm";
import NextButton from "../../components/NextButton";
import { NavBarContext } from "../../context/NavBarContext";

export default function Description() {
  let id = useParams();
  const { setBgColor, setPaymentFooter } = useContext(NavBarContext); 
  
  const [tour, setTour] = useState();
  const [auxiliary, setAuxiliary] = useState();
  const [guide, setGuide] = useState();
  const [photographer, setPhotographer] = useState();
  const [index, setIndex] = useState(0);
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [imagensIndex, setImagensIndex] = useState([0, 1, 2, 3]);

  useEffect(() => {
    // para subir a ao topo após renderizar a página
    window.scrollTo(0, 0);
    // para alterar cor do background de acordo com a página 
    setBgColor(true)
    setPaymentFooter(false)
  }, [])
  
  const prevPicture = () => {
    let imagens_index = imagensIndex;
    let temp = imagens_index[0];
    for (let index = 0; index < imagens_index.length - 1; index++) {
      imagens_index[index] = imagens_index[index + 1];
    }
    imagens_index[imagens_index.length - 1] = temp;
    setImagensIndex([...imagens_index]);
  };

  const nextPicture = () => {
    let imagens_index = imagensIndex;
    let temp = imagens_index[imagens_index.length - 1];
    for (let index = imagens_index.length - 1; index > 0; index--) {
      imagens_index[index] = imagens_index[index - 1];
    }
    imagens_index[0] = temp;
    setImagensIndex([...imagens_index]);
  };

  useEffect(() => {
    let selected_id = Number(id.id.replace(":", ""));
    let selected_tour = products.find((product) => product.id === selected_id);
    setTour(selected_tour);
    setAuxiliary(teamService.auxiliary);
    setGuide(teamService.guide);
    setPhotographer(teamService.photographer);
  }, [products]);

  useEffect(() => {
    let i = Math.floor(Math.random() * 3);
    setIndex(i);
  }, [tour]);

  return (
    <div className={style.singleServiceContainer}>
      {tour && (
        <>
          <section className={style.serviceMedia}>
            <div className={style.gallery}>
              <div className={style.galleryController}>
                <NextButton
                  onPress={prevPicture}
                  setStyles={{ transform: "rotateZ(180deg) scale(2.5)" }}
                />
                <NextButton onPress={nextPicture} />
              </div>
              <img
                src={tour.imagens[imagensIndex[0]]}
                alt={tour.name}
                className={style.bigPicture}
              />
            </div>
            <div className={style.smallPictures}>
              <img src={tour.imagens[imagensIndex[3]]} alt={tour.name} />
              <img src={tour.imagens[imagensIndex[2]]} alt={tour.name} />
              <img src={tour.imagens[imagensIndex[1]]} alt={tour.name} />
            </div>
          </section>
          <main>
            <section className={style.serviceDescription}>
              <div className={style.serviceOverView}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "24px",
                  }}
                >
                  <h1>{tour.name}</h1>
                  <span style={{ display: "flex" }}>
                    <AiFillStar /> {tour.rating}
                  </span>
                </div>
                <p>{tour.located}</p>
                <div>
                  {tour.included.map((item, key) => (
                    <p className={style.includedBtns} key={key}>
                      {item}
                    </p>
                  ))}
                </div>
                <p className={style.textDescription}>{tour.description}</p>
                <hr style={{ width: "90%", margin: '1rem auto 0' }} />
              </div>
            </section>
              {/* Area do Formulario inicial de Compra */}
            <div className={style.servicePrice}>
              { tour && 
              <BuyForm tourPrice={tour.price} 
                amount={tour.capacity - tour.sold}
                date={tour.Date.replaceAll("-", '/')}
                id={tour.id}
                />
              }
            </div>
            <section className={style.teamContainer}>
              <h2>
                Nosso time em <span>{tour.name}</span>
              </h2>
              <div className={style.teamContent}>
                {tour && (
                  <>
                    {/* area do lider da excursão, GUIA */}
                    <div className={style.guideContainer}>
                      <img src={guide[index].picture} />
                      <div>
                        <p className={style.teamName}>Guia {guide[index].name}</p>
                        <div
                          style={{ display: "flex" }}
                          className={style.teamOverview}
                        >
                          <p>
                            {guide[index].role} desde {guide[index].firstContract}
                          </p>
                          <p>
                            Idiomas:{" "}
                            {guide[index].languages.map((item) => `${item} `)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={style.teamRating}>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <AiFillStar style={{ fontSize: "20px" }} />{" "}
                        {guide[index].rate} Avaliações
                      </p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <TfiMedallAlt
                          style={{ color: "#2e99ff", fontSize: "20px" }}
                        />{" "}
                        {guide[index].level}
                      </p>
                    </div>
                    {/* Area do Auxiliar do guia */}
                    <div className={style.auxContainer}>
                      <img src={auxiliary[index].picture} />
                      <div>
                        <p className={style.teamName}>
                          Aux. {auxiliary[index].name}
                        </p>
                        <div
                          style={{ display: "flex" }}
                          className={style.teamOverview}
                        >
                          <p>
                            {auxiliary[index].role} desde{" "}
                            {auxiliary[index].firstContract}
                          </p>
                          <p>
                            Idiomas:{" "}
                            {auxiliary[index].languages.map((item) => `${item} `)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={style.teamRating}>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <AiFillStar style={{ fontSize: "20px" }} />{" "}
                        {auxiliary[index].rate} Avaliações
                      </p>
                      <p style={{ display: "flex", alignItems: "center" }}>
                        <TfiMedallAlt
                          style={{ color: "aqua", fontSize: "20px" }}
                        />{" "}
                        {auxiliary[index].level}
                      </p>
                    </div>
                    {/* Area do fotografo */}
                    <div className={style.photoContainer}>
                      <img src={photographer[index].picture} />
                      <div>
                        <p className={style.teamName}>
                          Fotógrafa {photographer[index].name}
                        </p>
                        <div
                          style={{ display: "flex" }}
                          className={style.teamOverview}
                        >
                          <p>
                            {photographer[index].role} desde{" "}
                            {photographer[index].firstContract}
                          </p>
                          <p>
                            Idiomas:{" "}
                            {photographer[index].languages.map(
                              (item) => `${item} `
                            )}
                          </p>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </section>
          </main>
          </>
      )}
      <hr style={{ width: "80%", margin: "2rem auto" }} />
      {/* Google Maps  */}
      {tour && (
        <section className={style.mapsContainer}>
          <h2>Veja a localização de {tour.name}, através do Google Maps.</h2>
          <div>
            <GoogleMaps
              lat={Number(tour.latitude)}
              long={Number(tour.longitude)}
            />
          </div>
        </section>
      )}
    </div>
  );
}
