import React, { useState } from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function CarouselServices({ children, setClass }) {
  const [hover, setHover] = useState(false);
// area de estilo do btn do slider
  const style = {
    normal: {
      color: '#333',
      transform: 'scale(2.2) translateY(-1.5rem)',
      marginInline: '-.5rem'
    },

    hover: {
      color: '#2e44ff',
    },
  }

  function SamplePrevArrow({ className, onClick }) {
    return (
      <CiCircleChevLeft
        onMouseEnter={()=>{
          setHover(true);
        }}
        onMouseLeave={()=>{
          setHover(false);
        }}
        style={{
          ...style.normal,
          ...(hover ? style.hover : null)
        }}
        className={className}
        onClick={onClick}
      />
    );
  }
  
  function SampleNextArrow({ className, onClick }) {
    return (
      <CiCircleChevRight
        className={className}
        onMouseEnter={()=>{
          setHover(true);
        }}
        onMouseLeave={()=>{
          setHover(false);
        }}
        style={{
          ...style.normal,
          ...(hover ? style.hover : null)
        }}
        onClick={onClick}
      />
    );
  }
  
//  Area de configurações do slider
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    autoplay: true,
    speed: 2300,
    slidesToShow: 3.55,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1340,
        settings: {
          slidesToShow: 3.1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.8,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.05,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1.6,
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
