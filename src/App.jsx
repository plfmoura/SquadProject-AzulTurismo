import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { updateProducts } from "./reducer/shoopingReducer";
import Rodape from "./components/Rodape";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  useEffect(() => {
    //Actualizando productos
    axios
      .get("https://tourismapi.herokuapp.com/products")
      .then((response) => {
        dispatch(updateProducts(response.data));
      })
      .catch();
  }, []);

  return (
    <div className="App">
        <NavBar />
        <Outlet />
        <Rodape />
    </div>
  );
}

export default App;
