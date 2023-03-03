import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TourCard from "../../components/TourCard";
import style from "./home.module.css";
import SearchInput from "./SearchInput";
import Men from "../../assets/home/men.png";
import CarouselServices from "./CarouselServices";
import CarouselRatings from "./CarouselRatings";
import CustomerCard from "./CustomerCard";
import Button from "../../components/Button";

const data = [
  {
    id: 1,
    customerName: "Nome de Usuário",
    customerProfilePicture: "",
    servicePicture: "https://i.imgur.com/wscxD2D.jpg",
    customerRating:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Proin libero nunc consequat interdum varius sit amet mattis. Massa sapien faucibus et molestie. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pharetra et ultrices neque ornare aenean.",
  },
  {
    id: 2,
    customerName: "Nome de Usuário",
    customerProfilePicture: "",
    servicePicture: "https://i.imgur.com/ikgw08O.jpeg",
    customerRating:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Proin libero nunc consequat interdum varius sit amet mattis. Massa sapien faucibus et molestie. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pharetra et ultrices neque ornare aenean.",
  },
  {
    id: 3,
    customerName: "Nome de Usuário",
    customerProfilePicture: "",
    servicePicture: "https://i.imgur.com/mrDUbjD.jpg",
    customerRating:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Proin libero nunc consequat interdum varius sit amet mattis. Massa sapien faucibus et molestie. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pharetra et ultrices neque ornare aenean.",
  },
  {
    id: 4,
    customerName: "Nome de Usuário",
    customerProfilePicture: "",
    servicePicture: "https://i.imgur.com/wscxD2D.jpg",
    customerRating:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Proin libero nunc consequat interdum varius sit amet mattis. Massa sapien faucibus et molestie. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pharetra et ultrices neque ornare aenean.",
  },
  {
    id: 5,
    customerName: "Nome de Usuário",
    customerProfilePicture: "",
    servicePicture: "https://i.imgur.com/8nzsZKK.jpg",
    customerRating:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet tellus cras adipiscing enim eu. Proin libero nunc consequat interdum varius sit amet mattis. Massa sapien faucibus et molestie. Libero nunc consequat interdum varius sit amet mattis vulputate enim. Pharetra et ultrices neque ornare aenean.",
  },
];

export default function Home() {
  const state = useSelector((state) => state);
  const { products } = state.shopping;
  const[filtered,setFiltered]=useState([])
  const[myRegion,setMyRegion]=useState("Todas as Regiões")
  const [showTop, setShowTop] = useState('')

  useEffect(()=>{
  setFiltered(products)

  },[products])

  return (
    <div className="Home">
      <header className={style.background}>
        <div className={style.titleContainer}>
          <p>Conheça o</p>
          <span>RIO</span>
          <p>com nossos</p>
          <span>Roteiros</span>
        </div>
        <div className={style.creativeContainer}>
          <img src={Men} alt="Criatvo Homem Rasgando a Tela" />
        </div>
      </header>
      <section className={style.searchInputContainer}>
        <SearchInput setFiltered={setFiltered} setMyRegion={setMyRegion} setShowTop={setShowTop}/>
      </section>
      <section className={style.servicesContainer}>
        <div style={{display: `${showTop}`}}>
        <h3>
          Passeios mais <span>Populares</span>
        </h3>
        <CarouselServices
          setClass={style.servicesSlider}
          children={products.slice(1, 10).map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              title={tour.name}
              location={tour.located}
              price={tour.price}
              image={tour.imagens[0]}
              rating={tour.rating}
            />
          ))}
        />
        </div>
        <h3>
          Passeios em <span>{myRegion}</span>
        </h3>

        <div className={style.servicesColumns}>
          {filtered.map((tour) => (
            <TourCard
              key={tour.id}
              id={tour.id}
              title={tour.name}
              location={tour.located}
              price={tour.price}
              image={tour.imagens[0]}
              rating={tour.rating}
            />
          ))}
        </div>
      </section>
      <hr style={{ width: "80%", margin: "2rem auto 0 auto" }} />
      <section className={style.customerContainer}>
        <h2>Avaliações de Usuários</h2>
        <div className={style.customerContent}>
          <CarouselRatings
            setclass={style.servicesSlider}
            children={data.map((item) => (
              <CustomerCard
                key={item.id}
                name={item.customerName}
                service={item.servicePicture}
                rating={item.customerRating}
                picture={item.servicePicture}
              />
            ))}
          />
        </div>
        <div className={style.singInCreativeContainer}>
          <img
            src="https://a.cdn-hotels.com/gdcs/production195/d1275/6335ff9a-0425-4f56-98fb-93ad82b6409d.jpg"
            alt="Mulher descendo a escada do Pontal do Atalaia - Arraial do Cabo"
          />
          <div>
            <h2>Faça seu Cadastro</h2>
            <Button text='Cadastre-se' />
          </div>
        </div>
      </section>
    </div>
  );
}
