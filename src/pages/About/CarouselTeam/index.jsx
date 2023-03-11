import React from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft } from "react-icons/ci";

function SampleNextArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#fff", transform: 'scale(2.5) rotate(180deg) translateX(-10px)'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({className, onClick}) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#fff", transform: 'scale(2.5) translateX(-10px)'}}
      onClick={onClick}
    />
  );
}

export default function CarouselTeam({ children, setclass }) {
  const settings = {
    className: "center",
    infinite: true,
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
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          initialSlide: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 880,
        settings: {
          centerPadding: 1.5,
          initialSlide: 3,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  return (
    <>
      <Slider {...settings}  className={ setclass }>
        { children }
      </Slider>
    </>
  );
}
