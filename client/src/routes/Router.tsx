import { Route, Routes } from "react-router-dom";
import { useRoleBasedRoutes } from "../hooks";
import { globalRoutes, publicRoutes } from "./routes";
import { AuthRoutes, PrivateRoutes } from "./protectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import { ErrorPage } from "../pages";

const Router = () => {
  const filteredRoutes = useRoleBasedRoutes();
  return (
    <Routes>
      {/* globals */}
      {globalRoutes.map(({ key, path, Element }) => (
        <Route key={key} path={path} element={<Element />} />
      ))}
      {/* public routes */}
      <Route element={<AuthRoutes />}>
        {publicRoutes.map(({ key, path, Element }) => (
          <Route key={key} path={path} element={<Element />} />
        ))}
      </Route>
      {/* private routes */}
      <Route element={<PrivateRoutes />}>
        {filteredRoutes?.map(({ key, path, Element }) => (
          <Route
            key={key}
            path={path}
            element={
              <DashboardLayout>
                <Element />
              </DashboardLayout>
            }
          />
        ))}
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Router;
