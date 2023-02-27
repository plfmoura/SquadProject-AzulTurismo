import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import { actualizarProductos } from "./reducer/shoopingReducer";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { user } = state.user;

  useEffect(() => {
    //Actualizando productos
    axios
      .get("https://tourismapi.herokuapp.com/products")
      .then((respuesta) => {
        console.log(respuesta.data);
        dispatch(actualizarProductos(respuesta.data));
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;