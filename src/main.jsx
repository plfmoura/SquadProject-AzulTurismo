import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { router } from "./routes";
import { LoggedProvider } from "./context/LoggedContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <LoggedProvider>
        <RouterProvider router={router} />
      </LoggedProvider>
    </Provider>
  </React.StrictMode>
);
