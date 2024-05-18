import { nanoid } from "nanoid";
import { PATHS } from "./paths";
import {
  DashboardHomePage,
  ErrorPage,
  LandingPage,
  LoginPage,
  RegisterPage,
} from "../pages";

export const globalRoutes = [
  {
    key: nanoid(),
    path: PATHS.landingPage,
    Element: LandingPage,
  },
  {
    key: nanoid(),
    path: PATHS.errorPage,
    Element: ErrorPage,
  },
];

export const publicRoutes = [
  {
    key: nanoid(),
    path: PATHS.loginPage,
    Element: LoginPage,
  },
  {
    key: nanoid(),
    path: PATHS.registerPage,
    Element: RegisterPage,
  },
];

export const privateRoutes = [
  {
    key: nanoid(),
    path: PATHS.dashboardHomePage,
    Element: DashboardHomePage,
  },
];
