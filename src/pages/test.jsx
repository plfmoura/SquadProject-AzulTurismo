import React from "react";
import Modal from "../components/Modal";
import SingIn from "./SingIn";
import { videoData } from "../services/video360";

export default function test() {
  return (
    <iframe
      src={videoData[0].video}
      title="YouTube video player"
      frameBorder="0"
      allow="autoplay"
      allowFullScreen
      className="tour-video-player"
    ></iframe>
  );
}
