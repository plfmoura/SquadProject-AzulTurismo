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
        id='directional-carousel-button'
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
        id='directional-carousel-button'
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
    slidesToShow: 5,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 4.1,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1720,
        settings: {
          slidesToShow: 3.8,
          slidesToScroll: 3,
        }
      },
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
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 2,
          initialSlide: 1
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2.2,
          initialSlide: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 2.02,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1.02,
          slidesToScroll: 1,
        },
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
