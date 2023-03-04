import React from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft } from "react-icons/ci";

function SampleNextArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#2eaaff", transform: 'scale(2.5) rotate(180deg)'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#2eaaff", transform: 'scale(2.5)'}}
      onClick={onClick}
    />
  );
}

export default function CarouselServices({ children, setClass }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1.7,
          initialSlide: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 690,
        settings: {
          initialSlide: 3,
          slidesToShow: 1.5,
        }
      },
      {
        breakpoint: 610,
        settings: {
          initialSlide: 3,
          slidesToShow: 1.2,
        }
      },
      {
        breakpoint: 490,
        settings: {
          initialSlide: 3,
          slidesToShow: 1,
        }
      },
    ]
  };

  return (
    <>
      <Slider {...settings} className={ setClass }>
        { children }
      </Slider>
    </>
  );
}
