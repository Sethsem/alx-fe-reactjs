import React from "react";
import { Navigate } from "react-router-dom";
import auth from "../utils/auth";

const ProtectedRoute = ({ children }) => {
  return auth.isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
