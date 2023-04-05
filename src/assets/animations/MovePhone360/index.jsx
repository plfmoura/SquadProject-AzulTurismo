import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import phone360 from "./phone-360.json";

export default function MovePhone360() {
  const [play, setPlay] = useState(true);
  
  return (
    <Lottie
      animationData={phone360}
      play={play}
      speed={0.8}
      style={{ width: 200, height: 200 }}
    />
  );
}
