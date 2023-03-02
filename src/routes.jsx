import React from "react";
import { createBrowserRouter, createHashRouter } from "react-router-dom";
import Description from "./pages/Description";
import Home from "./pages/Home";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Profile from "./pages/Profile";

export const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tour/:id",
        element: <Description />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
