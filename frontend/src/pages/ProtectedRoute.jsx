import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function ProtectedRoute() {
  const { loginData } = useAuth();

  if (!loginData.data) {
    return <Navigate to="/" state="Unauthorized" />;
  }
  return <Outlet />;
}

export default ProtectedRoute;
