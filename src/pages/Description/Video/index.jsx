import React, { useEffect } from "react";
import { videoData } from "../../../services/video360";
import { useState } from "react";
import "./video360.css";
import Move360 from "../../../assets/animations/Move360";
import MovePhone360 from "../../../assets/animations/MovePhone360";
import MoveFullScreen from "../../../assets/animations/MoveFullScreen";

export default function Video360({ tourName, videoSource }) {
  const [show360, setShow360] = useState(true);
  const [showPlayer, setShowPlayer] = useState(false);
  const [mensagem, setMensagem] = useState('')
  const [animation, setAnimation] = useState()

  const handleInstructions = () => {
    setMensagem('Para uma experiência imersiva utilize Óculos de Realidade Virtual e fones de ouvido.')
    setAnimation(<Move360 />)
    setTimeout(() => {
      setMensagem('No dispositivo móvel você pode girar o aparelho ou arrastar a tela.')
      setAnimation(<MovePhone360 />)
    }, [5000])
    setTimeout(() => {
      setMensagem('Assista em Tela cheia para uma melhor experiência.')
      setAnimation(<MoveFullScreen />)
    }, [10000])
  } 

  useEffect(() => {
    setShow360(true);
    handleInstructions()
    setTimeout(() => {
      setShow360(false);
      setShowPlayer(!showPlayer);
      setMensagem('')
    }, [15000]);
    document.body.style.overflowY = "hidden";
  }, []);

  useEffect(() => () => (document.body.style.overflowY = "auto"), []);

  return (
    <>
      <div className="tour-video-container">
        {show360 && (
          <div className="tour-video-alert">
            {animation}
            <label>{mensagem}</label>
          </div>
        )}
        {showPlayer && (
          <>
            <iframe
              src={videoData[0].video}
              title="YouTube video player"
              frameBorder="0"
              allow="autoplay"
              allowFullScreen
              className="tour-video-player"
            ></iframe>
          </>
        )}
      </div>
    </>
  );
}
