import React, { useState } from "react";
import Lottie from "react-lottie-player";
import erroAnimation from "../../../assets/animations/404-error.json";

export default function ErrorMotion() {
  const [animation, setAnimation] = useState(false);
  setTimeout(() => {
    setAnimation(true);
  }, [1000]);

  return (
    <Lottie
      className="animated-error"
      loop={false}
      animationData={erroAnimation}
      play={animation}
      style={{ width: 200, height: 200 }}
    />
  );
}
