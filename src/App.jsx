import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { updateProducts } from "./reducer/shoopingReducer";
import Rodape from "./components/Rodape";
import { setUser } from "./reducer/userReducer";
import { setFaq, setFaqUser } from "./reducer/faqReducer";
import MobileUser from "./components/NavBar/MobileUser";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  useEffect(() => {
    //update my products
    axios
      .get("https://tourismapi.herokuapp.com/products")
      .then((response) => {
        dispatch(updateProducts(response.data));
      })
      .catch();

    //Update my user if he is logged(local storage)
    if (!user) {
      try {
        let myuser = JSON.parse(localStorage.getItem("azul_user"));
        if (myuser) {
          dispatch(setUser(myuser));
        }
      } catch (error) {}
    }

    //Get of FAQ data to update reducer state
    axios
      .get("https://tourismapi.herokuapp.com/faq")
      .then((response) => {
        dispatch(setFaq(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  //Here will get the faq of the loged user
  useEffect(() => {
    if (user) {
      let id = user.user_id;
      let token = JSON.parse(localStorage.getItem("token"));
      const options = {
        method: "GET",
        url: `https://tourismapi.herokuapp.com/duvida/${id}`,
        headers: {
          "Content-Type": "application/json",
          "auth-token": token,
        },
      };
      axios
        .request(options)
        .then(function (response) {
          dispatch(setFaqUser(response.data));
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [user]);

  return (
    <div className="App">
      <NavBar />
      {user && (
        <MobileUser
          userName={user.name.split(" ")[0]}
          userPicture={user.image_profile}
        />
      )}
      <Outlet />
      <Rodape />
    </div>
  );
}

export default App;
