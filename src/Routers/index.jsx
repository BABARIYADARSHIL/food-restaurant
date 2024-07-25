import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../page/login/index";
import Home from "../page/home/index";
import NavBar from "../page/header/index";
import PrivateRouter from "./PrivateRouter";
import PublicRouter from "./PublicRouter";
import About from "../page/About/index";
import Menu from "../page/menu/index";
import Restaurant from "../page/restaurant/index";
import Cart from "../component/cart/index";
import ConfirmOrder from "../component/cart/confiremOrder/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "../page/notFound/index";

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
            <Route path="/restaurant/:id" element={<Restaurant />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/confirm" element={<ConfirmOrder />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* {token && <Footer />} */}
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default Routers;
