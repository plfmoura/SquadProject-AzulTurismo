import React from "react";
import Slider from "react-slick";
import { CiCircleChevLeft } from "react-icons/ci";

function SampleNextArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{
        color: "#fff",
        transform: "scale(2.5) rotate(180deg) translateX(-10px)",
      }}
      id="directional-carousel-button"
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{ color: "#fff", transform: "scale(2.5) translateX(-10px)" }}
      id="directional-carousel-button"
      onClick={onClick}
    />
  );
}

export default function CarouselTeam({ children, setclass }) {
  const settings = {
    className: "center",
    infinite: true,
    initialSlide: 0,
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1.7,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className={setclass}>
        {children}
      </Slider>
    </>
  );
}
