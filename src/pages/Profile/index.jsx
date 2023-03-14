import React, { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import HeartAnimation from "./Animations/Heart";
import style from "./profile.module.css";
import "./changeData.css";
import Button from "../../components/Button";
import { BsFillPencilFill, BsFillCheckSquareFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TfiMedallAlt } from "react-icons/tfi";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducer/userReducer";
import PreLoader from "../../components/PreLoader";
import { NavBarContext } from "../../context/NavBarContext";
import { actUser } from "../../reducer/userReducer";
import Carousel from "../../components/Carousel";
import Modal from "../../components/Modal";
import Purchases from "./Purchases";

export default function Profile() {
  const state = useSelector((state) => state);
  const { user } = state.user;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const { setBgColor } = useContext(NavBarContext);
  const [skeleton, setSkeleton] = useState(true);
  const profession = useRef();
  const about = useRef();
  const phone = useRef();
  const located = useRef();
  const [professionButton, setProfessionButon] = useState(true);
  const [aboutButton, setAboutButton] = useState(true);
  const [localizationButton, setlocalizationButton] = useState(true);
  const [phoneButton, setPhoneButton] = useState(true);

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
    setBgColor(true);
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
        <>
          {show && (
            <Modal
              setShow={setShow}
              children={<Purchases />}
            />
          )}
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
                    <div className={style.profileRating}>
                      <div>
                        <p>
                          <span>
                            <AiFillStar />
                          </span>
                          187 avaliações
                        </p>
                        <p>
                          <span>
                            <TfiMedallAlt />
                          </span>
                          Fominha de Excursão
                        </p>
                      </div>
                      <Button
                        text="Meus Passeios"
                        onPress={() => setShow(!show)}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.profileBio}>
                <div>
                  <h3>Profissão</h3>
                  {professionButton && (
                    // Botão de alteração
                    <BsFillPencilFill
                      onClick={() => {
                        profession.current.readOnly = false;
                        setProfessionButon(false);
                      }}
                    />
                  )}
                  {!professionButton && (
                    // Botão Check
                    <BsFillCheckSquareFill
                      className="checkSquare"
                      onClick={async () => {
                        profession.current.readOnly = true;
                        setProfessionButon(true);
                        dispatch(
                          actUser({ profession: profession.current.value })
                        );
                        let token = JSON.parse(localStorage.getItem("token"));
                        const options = {
                          method: "PATCH",
                          url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
                          headers: {
                            "auth-token": token,
                            "Content-Type": "application/json",
                          },
                          data: { profession: profession.current.value },
                        };
                        await axios.request(options);
                      }}
                    />
                  )}
                </div>
                {professionButton ? (
                  <input
                    type="text"
                    defaultValue={user.profession}
                    ref={profession}
                    readOnly={true}
                    className="profession input-disable"
                  />
                ) : (
                  <input
                    type="text"
                    defaultValue={user.profession}
                    ref={profession}
                    readOnly={true}
                    className="profession input-enable"
                  />
                )}
                <hr />
                <div>
                  <h3>Sobre mim</h3>
                  {aboutButton ? (
                    <BsFillPencilFill
                      onClick={() => {
                        about.current.readOnly = false;
                        setAboutButton(!aboutButton);
                      }}
                    />
                  ) : (
                    <BsFillCheckSquareFill
                      className="checkSquare"
                      onClick={async () => {
                        setAboutButton(!aboutButton);
                        about.current.readOnly = true;
                        dispatch(actUser({ about: about.current.value }));
                        let token = JSON.parse(localStorage.getItem("token"));
                        const options = {
                          method: "PATCH",
                          url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
                          headers: {
                            "auth-token": token,
                            "Content-Type": "application/json",
                          },
                          data: { about: about.current.value },
                        };
                        await axios.request(options);
                      }}
                    />
                  )}
                </div>
                {aboutButton ? (
                  <textarea
                    type="text"
                    defaultValue={user.about}
                    ref={about}
                    readOnly={true}
                    className="about-me input-disable"
                  />
                ) : (
                  <textarea
                    type="text"
                    defaultValue={user.about}
                    ref={about}
                    readOnly={true}
                    className="about-me input-enable"
                  />
                )}
              </div>
              <div className={style.profileInfo}>
                <div>
                  <h3>Idiomas</h3>
                  <BsFillPencilFill />
                </div>
                <div className={style.idiomsContainer}>
                  {[user.idioms].map((idiom) => (
                    <p key={idiom}>{idiom}</p>
                  ))}
                </div>
                <hr />
                <div>
                  <h3>Localização</h3>
                  {localizationButton ? (
                    <BsFillPencilFill
                      onClick={() => {
                        setlocalizationButton(!localizationButton);
                        located.current.readOnly = false;
                      }}
                    />
                  ) : (
                    <BsFillCheckSquareFill
                      className="checkSquare"
                      onClick={async () => {
                        located.current.readOnly = true;
                        setlocalizationButton(!localizationButton);
                        dispatch(actUser({ located: located.current.value }));
                        let token = JSON.parse(localStorage.getItem("token"));
                        const options = {
                          method: "PATCH",
                          url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
                          headers: {
                            "auth-token": token,
                            "Content-Type": "application/json",
                          },
                          data: { located: located.current.value },
                        };
                        await axios.request(options);
                      }}
                    />
                  )}
                </div>
                {localizationButton ? (
                  <input
                    type="text"
                    defaultValue={user.located}
                    ref={located}
                    readOnly={true}
                    className="input-disable"
                  />
                ) : (
                  <input
                    type="text"
                    defaultValue={user.located}
                    ref={located}
                    readOnly={true}
                    className="input-enable"
                  />
                )}
                <hr />
                <div>
                  <h3>Telefones</h3>
                  {phoneButton ? (
                    <BsFillPencilFill
                      onClick={() => {
                        phone.current.readOnly = false;
                        setPhoneButton(!phoneButton);
                      }}
                    />
                  ) : (
                    <BsFillCheckSquareFill
                      className="checkSquare"
                      onClick={async () => {
                        phone.current.readOnly = true;
                        setPhoneButton(!phoneButton);
                        dispatch(actUser({ tel1: phone.current.value }));
                        let token = JSON.parse(localStorage.getItem("token"));
                        const options = {
                          method: "PATCH",
                          url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
                          headers: {
                            "auth-token": token,
                            "Content-Type": "application/json",
                          },
                          data: { tel1: phone.current.value },
                        };
                        await axios.request(options);
                      }}
                    />
                  )}
                </div>
                {phoneButton ? (
                  <input
                    type="text"
                    defaultValue={user.tel1}
                    ref={phone}
                    readOnly={true}
                    className="input-disable"
                  />
                ) : (
                  <input
                    type="text"
                    defaultValue={user.tel1}
                    ref={phone}
                    readOnly={true}
                    className="input-enable"
                  />
                )}
                <hr />
                <div>
                  <h3>Email</h3>
                  {/* Não é editavel neste momento, botão será comentado */}
                  {/* <BsFillPencilFill /> */}
                </div>
                <p>{user.email}</p>
              </div>
            </main>
            <section className={style.profileFooter}>
              <h2>Arquivos de {user.name}</h2>
              <Carousel
                setClass="profile-carousel"
                children={user.images.map((image, key) => (
                  <HeartAnimation image={image} key={key} />
                ))}
              />
            </section>
          </div>
        </>
      )}
    </>
  );
}
