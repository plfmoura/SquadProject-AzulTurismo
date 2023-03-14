import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TourCardSkeleton from "./TourCardSkeleton";
import style from "./tourCard.module.css";
import { AiFillStar } from "react-icons/ai";
import NextButton from "../../components/NextButton";

function TourCard({ id, title, location, image, price, rating }) {
  const [skeleton, setSkeleton] = useState(true);
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const nextPicture = () => {
    setIndex(index + 1);
    if (index === 3) {
      setIndex(0);
    }
  };

  const prevPicture = () => {
    setIndex(index - 1);
    if (index === 0) {
      setIndex(3);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setSkeleton(false);
    }, [3000]);
  }, []);

  return (
    <>
      {skeleton ? (
        <TourCardSkeleton />
      ) : (
        <div className={style.cardContainer}
        >
          <div className={style.gallery}>
            <div className={style.galleryController}>
              <NextButton
                onPress={prevPicture}
                setStyles={{ transform: "rotateZ(180deg) scale(2.5)" }}
              />
              <NextButton onPress={nextPicture} />
            </div>
            <img
              src={image[index]}
              alt={title}
              className={style.bigPicture}
              onClick={() => {
                navigate(`/tour/:${id}`);
              }}
            />
          </div>
          <div
            onClick={() => {
              navigate(`/tour/:${id}`);
            }}
          >
            <div className={style.cardTitle}>
              <p>{title}</p>
              <p>
                <span>
                  <AiFillStar />
                </span>
                {rating}
              </p>
            </div>
            <div className={style.cardOverView}>
              <p>{location}</p>
              <p>
                <span>R${price} </span>/pessoa
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TourCard;
