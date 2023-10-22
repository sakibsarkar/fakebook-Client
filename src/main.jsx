import "./index.css";
import ContextProvider from "./Compo/ContextProvider/ContextProvider";
import Home from "./Compo/Home/Home";
import Layout from "./Compo/Layout";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>,
)
