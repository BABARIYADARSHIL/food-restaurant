import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/login/Login";
import Home from "../page/home/index";
import NavBar from "../page/header/NavBar";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import About from "../page/about";
import Menu from "../page/menu";
const Routers = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route element={<PublicRouter />}>
            <Route path="/" element={<Login />} />
          </Route>

          <Route element={<PrivateRouter />}>
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Menu" element={<Menu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routers;
