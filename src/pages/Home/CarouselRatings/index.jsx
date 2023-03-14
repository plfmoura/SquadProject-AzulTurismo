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

function SamplePrevArrow({className, onClick}) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#2eaaff", transform: 'scale(2.5)'}}
      onClick={onClick}
    />
  );
}

export default function CarouselRatings({ children, setclass }) {
  const settings = {
    className: "center",
    infinite: true,
    slidesToShow: 3,
    swipeToSlide: true,
    autoplay: true,
    speed: 2300,
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
          slidesToShow: 2.7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.3,
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
