import React, { useEffect } from "react";
import { videoData } from "../../../services/video360";
import { useState } from "react";
import "./video360.css";
import Move360 from "../../../assets/animations/Move360";
import MovePhone360 from "../../../assets/animations/MovePhone360";

export default function Video360({ tourName, videoSource }) {
  const [show360, setShow360] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    setShow360(true);
    setTimeout(() => {
      setShow360(false);
      setShowPlayer(!showPlayer);
    }, [7000]);
    document.body.style.overflowY = "hidden";
  }, []);

  useEffect(() => () => (document.body.style.overflowY = "auto"), []);

  return (
    <>
      <span className="tour-video-title">
        {!showPlayer ? "Você irá assistir um vídeo de " + tourName : tourName}{" "}
        em 360º
      </span>
      <div className="tour-video-container">
        {show360 && (
          <div className="tour-video-alert">
            <div>
              <Move360 />
              <MovePhone360 />
            </div>
            <label>
              Para uma melhor experiência, utilize Óculos de Realidade Virtual,
              fones de ouvido e assista em tela cheia.
            </label>
            <label>
              No dispositivo móvel você pode girar o aparelho ou arrastar a
              tela.
            </label>
            <label style={{ fontSize: 10 }}>
              Este video é meramente ilustrativo. Ainda em construção!
            </label>
          </div>
        )}
        {showPlayer && (
          <>
            <iframe
              width="100%"
              height="315"
              src={videoData[0].video}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="tour-video-player"
            ></iframe>
          </>
        )}
      </div>
    </>
  );
}
