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
  const [ticketHistory, setTicketHistory] = useState();
  const [show, setShow] = useState(false);
  const { setBgColor, setPaymentFooter, newNotification } = useContext(NavBarContext);
  const [skeleton, setSkeleton] = useState(true);
  const profession = useRef();
  const photo_profile = useRef();
  const about = useRef();
  const phone = useRef();
  const located = useRef();
  const [professionButton, setProfessionButon] = useState(true);
  const [aboutButton, setAboutButton] = useState(true);
  const [localizationButton, setlocalizationButton] = useState(true);
  const [phoneButton, setPhoneButton] = useState(true);

  const handleImagenSubmit = async (e) => {
    const new_imagen = new FormData();
    new_imagen.append("image", e.target.files[0]);
    console.log(new_imagen);

    //1 step: get the old img
    const old_img = photo_profile.current.src;

    //2-step: get the new img an post in Imgur
    const options = {
      method: "POST",
      url: "https://api.imgur.com/3/image",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5d3a830d45c8c58",
      },
      data: new_imagen,
    };
    let response = await axios.request(options);

    let new_imagen_url = response.data.data.link;

    //3-step: Update the database, the state and the localstorage
    dispatch(actUser({ image_profile: new_imagen_url }));
    let token = JSON.parse(localStorage.getItem("token"));
    const options1 = {
      method: "PATCH",
      url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
      },
      data: { image_profile: new_imagen_url },
    };
    await axios.request(options1);

    //4 step: delete the old img from imgur
    /*const options2 = {
      method: "DEL",
      url: old_img,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5d3a830d45c8c58",
      },
    };
    let delresponse = await axios.request(options2);
    console.log(delresponse);*/
  };
  const handleCapaSubmit = async (e) => {
    const new_imagen = new FormData();
    new_imagen.append("image", e.target.files[0]);

    //1 step: get the old img
    const old_img = photo_profile.current.src;

    //2-step: get the new img an post in Imgur
    const options = {
      method: "POST",
      url: "https://api.imgur.com/3/image",
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5d3a830d45c8c58",
      },
      data: new_imagen,
    };
    let response = await axios.request(options);
    let new_imagen_url = response.data.data.link;

    //3-step: Update the database, the state and the localstorage
    dispatch(actUser({ image_banner: new_imagen_url }));
    let token = JSON.parse(localStorage.getItem("token"));
    const options1 = {
      method: "PATCH",
      url: `https://tourismapi.herokuapp.com/user/${user.user_id}`,
      headers: {
        "auth-token": token,
        "Content-Type": "application/json",
      },
      data: { image_banner: new_imagen_url },
    };
    await axios.request(options1);

    //4 step: delete the old img from imgur
    /*const options2 = {
      method: "DEL",
      url: old_img,
      headers: {
        "Content-type": "application/x-www-form-urlencoded",
        Authorization: "Client-ID 5d3a830d45c8c58",
      },
    };
    let delresponse = await axios.request(options2);
    console.log(delresponse);*/
  };

  useEffect(() => {
    if (!user) {
      try {
        let myuser = JSON.parse(localStorage.getItem("azul_user"));
        myuser ? dispatch(setUser(myuser)) : navigate("/");
      } catch (error) {}
    }
    setBgColor(true);
    setPaymentFooter(false);
  }, []);

  useEffect(() => {
    // para subir a pagina após carregamento
    window.scrollTo(0, 0);
  } , [ skeleton === true ])

  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    let sendUser = JSON.parse(localStorage.getItem("azul_user")).user_id;
    const options = {
      method: "GET",
      url: `https://tourismapi.herokuapp.com/history/${sendUser}`,
      headers: {
        "Content-Type": "application/json",
        "auth-token": token,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setTicketHistory(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [user]);

  return (
    <>
      {!skeleton ? (
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
              children={<Purchases data={ticketHistory} />}
            />
          )}
          <div className={style.profileContainer}>
            <header className={style.userBackground} id="user-Bg">
              <img src={user.image_banner} />
              <label htmlFor="bg_change" className="btn-changeBackground">
                <BsFillPencilFill className={style.penIcon} />
              </label>
              <input
                style={{
                  display: "none",
                }}
                type="file"
                id="bg_change"
                onChange={(e) => {
                  handleCapaSubmit(e);
                }}
              />
            </header>
            <main className={style.profileContent}>
              <div className={style.profileHeader}>
                <div className={style.alignContent}>
                  <div className={style.profilePictureContainer}>
                    <img
                      className={style.profilePicture}
                      src={user.image_profile}
                      ref={photo_profile}
                    />
                    <label htmlFor="image_change">
                      <BsFillPencilFill className={style.penIcon} />
                    </label>

                    <input
                      style={{
                        display: "none",
                      }}
                      type="file"
                      id="image_change"
                      onChange={(e) => {
                        handleImagenSubmit(e);
                      }}
                    />
                  </div>
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
                        text={newNotification ? 
                          (
                          <div style={{display: 'grid', placeContent: 'center'}}>
                            <p>Meus Passeios</p>
                            <label className='new-purchase-notification'>1</label>
                          </div>)
                          : ( 'Meus Passeios')
                        }
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
                      className={style.penIcon}
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
                      className={style.penIcon}
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
                  {/* não é editavel por agora */}
                  {/* <BsFillPencilFill /> */}
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
                      className={style.penIcon}
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
                      className={style.penIcon}
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
