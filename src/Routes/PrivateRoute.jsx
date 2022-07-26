import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const state = useSelector((state) => state.data.auth);

  if (state !== true) {
    return <Navigate to="/signin" />;
  } else {
    return children;
  }

  // return <Navigate to="/signin" />;
};
