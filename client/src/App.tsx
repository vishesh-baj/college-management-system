import { Route, Routes } from "react-router-dom";
import { globalRoutes, privateRoutes, publicRoutes } from "./routes/routes";
import { AuthRoutes, PrivateRoutes } from "./routes/protectedRoutes";
import DashboardLayout from "./layouts/DashboardLayout";
const App = () => {
  return (
    <>
      <Routes>
        {/* global */}
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
          {privateRoutes.map(({ key, path, Element }) => (
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
      </Routes>
    </>
  );
};

export default App;
