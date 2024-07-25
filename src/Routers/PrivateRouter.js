import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import Footer from "../page/footer/index";

const PrivateRouter = () => {
  const token = localStorage.getItem("jwtToken");
  return token ? (
    <>
      <Outlet />
      <Footer />
    </>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRouter;
