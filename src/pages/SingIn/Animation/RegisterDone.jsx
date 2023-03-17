import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import successMini from "../../../assets/animations/success-mini.json";
import './registerDone.css'

export default function RegisterDone({ play }) {
  const [animation, setAnimation] = useState(false);
  const [visible, setVisible] = useState("none");

  const Stop = () => {
    setAnimation(false);
    setVisible('none')
  };

  const Play = () => {
    setAnimation(true);
      setVisible('flex')
  };

  useEffect(() => {
    play ? Play() : null 
  }, [ play ])

  return (

      <div 
      className="onSuccess-animation-container"
      style={{
        width: '300px',
        minHeight: '100px',
        textAlign: 'center',
        display: `${visible}`,
        flexDirection: 'column',
        alignItems: 'center',
        position: "absolute",
        top: '-4rem',
        zIndex: "1000",
        overflow: "hidden",
      }}
    >
      <Lottie
        loop={true}
        speed={0.8}
        animationData={successMini}
        play={animation}
        style={{
          width: 250,
          height: 250,
        }}
        onLoopComplete={() => Stop() }
      />
      <span>
        Seu cadastrado foi efetuado
        <br /> com sucesso!
      </span>
    </div>
  );
}
