import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { LoggedProvider } from "./context/LoggedContext";
import { NavBarProvider } from "./context/NavBarContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoggedProvider>
        <NavBarProvider>
          <RouterProvider router={router} />
        </NavBarProvider>
      </LoggedProvider>
    </Provider>
  </React.StrictMode>
);
