import { Navigate, Outlet } from "react-router-dom";
import { PATHS } from "./paths";

export const PrivateRoutes = () => {
  const auth: boolean = localStorage.getItem("token") !== null;
  return auth ? <Outlet /> : <Navigate to={PATHS.loginPage} />;
};

export const AuthRoutes = () => {
  const auth: boolean = localStorage.getItem("token") !== null;
  return auth ? <Outlet /> : <Navigate to={PATHS.dashboardHomePage} />;
};
