import { Outlet, Router, Navigate } from "react-router-dom";
import React from "react";

const PublicRouter = () => {
  const tokenString = localStorage.getItem("jwtToken");
  const token = tokenString ? JSON.parse(tokenString) : null;
  return token && token.value ? <Navigate to="/Home" /> : <Outlet />;
};

export default PublicRouter;
