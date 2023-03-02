import React from 'react'
import Slider from "react-slick";
import { CiCircleChevLeft } from "react-icons/ci";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#000", transform: 'scale(2.5) rotate(180deg)'}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <CiCircleChevLeft
      className={className}
      style={{color: "#000", transform: 'scale(2.5)'}}
      onClick={onClick}
    />
  );
}

export default function CarouselHome({ children, setClass }) {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Slider {...settings} className={ setClass }>
        { children }
      </Slider>
    </>
  );
}
