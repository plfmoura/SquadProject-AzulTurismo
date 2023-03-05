import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import style from "./description.module.css";
import { teamService } from "../../services/teamService";
import { AiFillStar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import GoogleMaps from "../../components/GoogleMaps";
import BuyForm from "./BuyForm";
import NextButton from "../../components/NextButton";

export default function Description() {
  let id = useParams();
  const [tour, setTour] = useState();
  const [auxiliary, setAuxiliary] = useState();
  const [guide, setGuide] = useState();
  const [photographer, setPhotographer] = useState();
  const [index, setIndex] = useState(0);
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const [imagensIndex, setImagensIndex] = useState([0, 1, 2, 3]);
  const [imagens, setImagens] = useState()

  const [ index1, setIndex1 ] = useState(0)
  const [ index2, setIndex2 ] = useState(1)
  const [ index3, setIndex3 ] = useState(2)
  const [ index4, setIndex4 ] = useState(3)

  const nextPicture = () => {
    setIndex1(index1 + 1)
    setIndex2(index2 + 1)
    setIndex3(index3 + 1)
    setIndex4(index4 + 1)

    if(index1 === 3){
      setIndex1(0)
    } 
    if(index2 === 3){
      setIndex2(0)
    } 
    if(index3 === 3){
      setIndex3(0)
    } 
    if(index4 === 3){
      setIndex4(0)
    } 
  }

  const prevPicture = () => {
    setIndex1(index1 - 1)
    setIndex2(index2 - 1)
    setIndex3(index3 - 1)
    setIndex4(index4 - 1)

    if(index1 === 0){
      setIndex1(3)
    } 
    if(index2 === 0){
      setIndex2(3)
    } 
    if(index3 === 0){
      setIndex3(3)
    } 
    if(index4 === 0){
      setIndex4(3)
    } 
  }

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
                <NextButton onPress={ prevPicture } setStyles={{transform: 'rotateZ(180deg) scale(2.5)'}}/>
                <NextButton onPress={ nextPicture } />
              </div>
              <img src={tour.imagens[index1]} alt={tour.name} className={style.bigPicture}/>
            </div>
            <div className={style.smallPictures}>
              <img src={tour.imagens[index2]} alt={tour.name} />
              <img src={tour.imagens[index4]} alt={tour.name} />
              <img src={tour.imagens[index3]} alt={tour.name} />
            </div>
          </section>
          <section className={style.serviceDescription}>
            <div className={style.serviceOverView}>
              <div style={{display: 'flex', alignItems: 'center', fontSize: '24px'}}>
                <h1>{tour.name}</h1>
                <span style={{display: 'flex'}}><AiFillStar/> {tour.rating}</span>
              </div>
              <p>{tour.located}</p>
              <div>
                {tour.included.map((item, key) => (
                  <p className={style.includedBtns} key={key}>{item}</p>
                ))}
              </div>
              <p>{tour.description}</p>
            </div>
            {/* Area do Formulario inicial de Compra */}
            <div className={style.servicePrice}>
              <BuyForm tourPrice={tour.price}/>
            </div>
          </section>
            <hr style={{width: '80%', margin: '2rem auto'}}/>
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
        </>
      )}
      <hr style={{width: '80%', margin: '2rem auto'}}/>
      {/* Google Maps  */}
      {tour && (
        <section className={style.mapsContainer}>
          <h2>Nosso destino em {tour.name} através do Maps</h2>
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
