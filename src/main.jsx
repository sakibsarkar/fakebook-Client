import "./index.css";
import CheckMail from "./Compo/CheckMail/CheckMail";
import ContextProvider from "./Compo/ContextProvider/ContextProvider";
import Home from "./Compo/Home/Home";
import Layout from "./Compo/Layout";
import Login from "./Compo/Login/Login";
import PrivateRoute from "./Compo/PrivateRoute/PrivateRoute";
import React from "react";
import ReactDOM from "react-dom/client";
import SignIn from "./Compo/SignIn/SignIn";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      }
    ]
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },{
    path:"/mailCheck",
    element:<CheckMail></CheckMail>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>,
)
