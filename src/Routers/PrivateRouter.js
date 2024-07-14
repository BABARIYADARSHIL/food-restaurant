import { Outlet, Router, Navigate } from "react-router-dom";
import React from "react";

const PrivateRouter = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
