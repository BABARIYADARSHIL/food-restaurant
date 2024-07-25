import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PublicRouter = () => {
  const token = localStorage.getItem("jwtToken");
  return token ? <Navigate to="/Home" /> : <Outlet />;
};

export default PublicRouter;
