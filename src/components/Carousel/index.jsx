import React, { useState } from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function Carousel({ children, setClass }) {
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
    slidesToShow: 1.45,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 1.45,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1.4,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
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
