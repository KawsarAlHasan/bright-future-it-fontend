import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserProfile } from "../api/allApi";
import Loading from "../components/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading, error } = useUserProfile();
  const location = useLocation();
  const token = localStorage.getItem("token");

  if (loading) {
    return <Loading></Loading>;
  }

  if (error || !user || !token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
