import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/Context";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useContext(UserContext);

  console.log(isAuthenticated,"is Auth")

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

