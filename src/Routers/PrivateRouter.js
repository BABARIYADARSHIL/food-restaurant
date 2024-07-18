import { Outlet, Router, Navigate } from "react-router-dom";
import React from "react";

const PrivateRouter = () => {
   const tokenString = localStorage.getItem("jwtToken");
   const token = tokenString ? JSON.parse(tokenString) : null;
   return token && token.value ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRouter;
