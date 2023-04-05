import React from "react";
import { videoData } from "../../../services/video360";

export default function Video360({tourName, videoSource}) {
  return (
    <>
        <span>Visualize <strong>{tourName}</strong> em 360º</span>
      <iframe
        width="560px"
        //560px
        height="315"
        src={videoData[0].video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </>
  );
}
