import React from 'react'

export default function teste() {
  return (
    <div>
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
            {/* Area do Formulario inicial de Compra */}
            <div className={style.servicePrice}>
              <BuyForm tourPrice={tour.price} 
                option={ <option>{tour.Date}</option>}
                id={tour.id}
                />
            </div>
          </section>
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
    </div>
  )
}
