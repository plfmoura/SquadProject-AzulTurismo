import React, { useEffect, useRef, useState } from "react";
import Button from "../../components/Button";
import FacebookAuth from "./FacebookAuth";
import GoogleAuth from "./GoogleAuth";
import style from "./singIn.module.css";
import axios from "axios";
import PreLoader from "../../components/PreLoader";
import { useDispatch } from "react-redux";
import { setUser } from "../../reducer/userReducer";

export default function SingIn({ setShow }) {
  const [login, setLogin] = useState(false);
  const [load, setLoad] = useState(false);
  const [status, setStatus] = useState();

  let showStatus = "";

  const loginForm = useRef();
  const registerForm = useRef();
  const dispatch = useDispatch();

  // Function Register
  const handleRegister = async (e) => {
    e.preventDefault();
    let name = registerForm.current.name.value;
    let email = registerForm.current.email.value;
    let password = registerForm.current.password.value;
    let confirmPassword = registerForm.current.confirmPassword.value;
    if (password != confirmPassword) {
      alert("As senhas não coinciden");
      return;
    }

    const options = {
      method: "POST",
      url: "https://tourismapi.herokuapp.com/register",
      headers: { "Content-Type": "application/json" },
      data: {
        name: `${name}`,
        email: `${email}`,
        password: `${password}`,
        idioms: "Português",
        profession: "Insira sua profissão",
        located: "Insira seu Estado",
        tel1: "Insira seu Telefone",
        tel2: "",
        about: "Conte algo sobre você",
        images: ["", "", "", ""],
        image_banner: "",
        image_profile: "",
      },
    };
    try {
      await axios.request(options);
      showLoad();
      registerForm.current.reset();
      setTimeout(() => {
        setLogin(false);
      }, [3000]);
      alert("Cadastro Efetuado com Sucesso!");
    } catch (error) {
      showLoad();
      alert("Usuário já cadastrado");
      registerForm.current.reset();
    }
  };

  const showLoad = () => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, [3000]);
  };

  //function login
  const handleLogin = async (e) => {
    e.preventDefault();
    let email = loginForm.current.email_login.value;
    let password = loginForm.current.password_login.value;

    const options = {
      method: "POST",
      url: "https://tourismapi.herokuapp.com/login",
      headers: { "Content-Type": "application/json" },
      data: {
        email: `${email}`,
        password: `${password}`,
      },
    };
    try {
      let response = await axios.request(options);
      showLoad();
      dispatch(setUser(response.data.user));
      localStorage.setItem("azul_user", JSON.stringify(response.data.user));
      localStorage.setItem("token", JSON.stringify(response.data.token));
      loginForm.current.reset();
      setTimeout(() => {
        showLoad();
      }, [2000]);
      // alert("Buscando dados no servidor.");
      setShow(false);
    } catch (error) {
      showLoad();
      console.log(error);
      alert("Email ou Senha errados.");
    }
  };

  return (
    <div>
      {login ? (
        <form
          className={style.singInContainer}
          ref={registerForm}
          onSubmit={handleRegister}
        >
          <div className={style.formHeader}>
            <img src="azul.png" alt="Logo da Empresa Azul Turismo" />
            <span>Cadastre-se agora</span>
            <p>Faça seu cadastro agora e comece a explorar nossos passeios.</p>
          </div>
          <div className={style.formMain}>
            <input
              type="text"
              placeholder="Insira seu nome"
              id="name"
              required
            />
            <input
              type="email"
              placeholder="Insira seu email"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              id="email"
              required
            />
            <input
              type="password"
              placeholder="Insira uma senha"
              id="password"
              required
            />
            <input
              type="password"
              placeholder="Confirme sua senha"
              id="confirmPassword"
              required
            />
          </div>
          <div className={style.formFooter}>
            {load ? (
              <>
                {status && (
                  <span className={style.statusSpan}>{showStatus}</span>
                )}
                <PreLoader />
              </>
            ) : (
              <>
                <Button text="Cadastrar" type="submit" />
                <span>ou</span>
                {/* <FacebookAuth />
                <GoogleAuth /> */}
                <span onClick={() => setLogin(!login)}>
                  Já tem uma conta? <strong>Entrar</strong>
                </span>
              </>
            )}
          </div>
        </form>
      ) : (
        <form className={style.loginContainer} ref={loginForm}>
          <div className={style.formHeader}>
            <img src="azul.png" alt="Logo da Empresa Azul Turismo" />
            <span>Entre como usuário</span>
            <p>Entre agora e comece a explorar nossos passeios.</p>
          </div>
          <div className={style.formMain}>
            <input
              type="email"
              placeholder="Email cadastrado"
              pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
              required
              id="email_login"
            />
            <input
              type="password"
              placeholder="Senha de usuário"
              id="password_login"
              required
            />
          </div>
          <div className={style.formFooter}>
            {load ? (
              <>
                <span className={style.statusSpan}>{showStatus}</span>
                <PreLoader />
              </>
            ) : (
              <>
                <Button onPress={handleLogin} text="Entrar como Usuário" />
                <span>ou</span>
                {/*  <FacebookAuth />
              <GoogleAuth />*/}
                <span onClick={() => setLogin(!login)}>
                  Não é cadastrado? <strong>Cadastre-se</strong>
                </span>
              </>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
