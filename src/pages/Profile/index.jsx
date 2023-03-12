import React, { useContext, useEffect, useState } from "react";
import HeartAnimation from "./HeartAnimation";
import style from "./profile.module.css";
import Button from "../../components/Button";
import { BsFillPencilFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import PreLoader from "../../components/PreLoader";
import { NavBarContext } from "../../context/NavBarContext";

export default function Profile() {
  const state = useSelector((state) => state);
  const { user } = state.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setBgColor } = useContext(NavBarContext);
  const [ skeleton, setSkeleton ] = useState(true);

  useEffect(() => {
    if (!user) {
      try {
        let myuser = JSON.parse(localStorage.getItem("azul_user"));
        myuser ? dispatch(setUser(myuser)) : navigate("/");
      } catch (error) {}
    }
    // para subir a pagina após carregamento
    window.scrollTo(0, 0);
    setTimeout(() => {
      setSkeleton(false);
    }, [3000]);
    setBgColor(true)
  }, []);

  return (
    <>
      {skeleton ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <PreLoader />
        </div>
      ) : (
        <div className={style.profileContainer}>
          <header className={style.userBackground}>
            <img src={user.image_banner} />
          </header>
          <main className={style.profileContent}>
            <div className={style.profileHeader}>
              <div className={style.alignContent}>
                <img
                  className={style.profilePicture}
                  src={user.image_profile}
                />
                <div className={style.userInfo}>
                  <h2>{user && user.name}</h2>
                  <div>
                    <div className={style.profileRating}>
                      <p>
                        <span>
                          <AiFillStar />
                        </span>{" "}
                        187 avaliações
                      </p>
                      <p>
                        <span>
                          <TfiMedallAlt />
                        </span>{" "}
                        Fominha de Excursão
                      </p>
                    </div>
                    <Button text="Meus Passeios" />
                  </div>
                </div>
              </div>
            </div>
            <div className={style.profileBio}>
              <div>
                <h3>Profissão</h3>
                <BsFillPencilFill />
              </div>
              <p>{user.profession}</p>
              <hr />
              <div>
                <h3>Sobre mim</h3>
                <BsFillPencilFill />
              </div>
              <p>{user.about}</p>
            </div>
            <div className={style.profileInfo}>
              <div>
                <h3>Idiomas</h3>
                <BsFillPencilFill />
              </div>
              <div>
                {[user.idioms].map((idiom) => (
                  <p key={idiom}>{idiom}</p>
                ))}
              </div>
              <hr />
              <div>
                <h3>Localização</h3>
                <BsFillPencilFill />
              </div>
              <p>{user.located}</p>
              <hr />
              <div>
                <h3>Telefones</h3>
                <BsFillPencilFill />
              </div>
              <p>{user.tel1}</p>
              <p>{user.tel2}</p>
              <hr />
              <div>
                <h3>Email</h3>
                <BsFillPencilFill />
              </div>
              <p>{user.email}</p>
            </div>
          </main>
          <section className={style.profileFooter}>
            <h2>Arquivos de {user.name}</h2>
            <div>
              {user.images.map((image, key) => (
                <HeartAnimation image={image} key={key}/>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
