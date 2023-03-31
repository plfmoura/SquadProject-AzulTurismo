import React from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft } from "react-icons/ci";

function SampleNextArrow({ className, onClick }) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#2eaaff", transform: 'scale(2.5) rotate(180deg)'}}
        id='directional-carousel-button'
        onClick={onClick}
    />
  );
}

function SamplePrevArrow({className, onClick}) {
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#2eaaff", transform: 'scale(2.5)'}}
        id='directional-carousel-button'
        onClick={onClick}
    />
  );
}

export default function CarouselRatings({ children, setclass }) {
  const settings = {
    className: "center",
    infinite: true,
    swipeToSlide: true,
    autoplay: true,
    slidesToShow: 3.1,
    speed: 2300,
    dots: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.7,
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.3,
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 2.05,
          dots: false
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.1,
          dots: false
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1.7,
          dots: false
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1.4,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.2,
          dots: false
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.05,
          dots: false
        }
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 0.95,
          dots: false
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
