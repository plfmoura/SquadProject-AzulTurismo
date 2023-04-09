import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import click from "./click-here.json";
import "../animationStyle.css";
import { RiFullscreenFill } from "react-icons/ri";

export default function MoveFullScreen() {
  const [play, setPlay] = useState(false);
    const [ show, setShow ] = useState(true)

  useEffect(() => {
    setShow(true)
    setTimeout(() => {
        setPlay(true)
    } , [1000])
  } , [play === false])

  !show && setTimeout(() => {setShow(true)} , [1000])

  return (
    <div className="full-screen-container">
      <div className="align-fullScreen-icon">
        <RiFullscreenFill className="full-screen-icon" />
      </div>
      {show && 
      <Lottie
        animationData={click}
        play={play}
        speed={0.8}
        loop={show}
        style={{ width: 200, height: 200 }}
        className="clickFullScreen-style"
        onLoopComplete={() => setShow(false)}
      />}
    </div>
  );
}
