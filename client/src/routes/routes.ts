import { nanoid } from "nanoid";
import { PATHS } from "./paths";
import {
  CreateFacultyPage,
  CreateStudentPage,
  DashboardHomePage,
  EditFacultyPage,
  EditStudentPage,
  ErrorPage,
  FacultyDashboardPage,
  LandingPage,
  LoginPage,
  StudentDashboardPage,
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
];

export const privateRoutes = [
  {
    key: nanoid(),
    path: PATHS.dashboardHomePage,
    Element: DashboardHomePage,
  },
  {
    key: nanoid(),
    path: PATHS.facultyDashboardPage,
    Element: FacultyDashboardPage,
  },
  {
    key: nanoid(),
    path: PATHS.createFacultyPage,
    Element: CreateFacultyPage,
  },
  {
    key: nanoid(),
    path: PATHS.editFacultyPage,
    Element: EditFacultyPage,
  },
  {
    key: nanoid(),
    path: PATHS.studentDashboardPage,
    Element: StudentDashboardPage,
  },
  {
    key: nanoid(),
    path: PATHS.createStudentPage,
    Element: CreateStudentPage,
  },
  {
    key: nanoid(),
    path: PATHS.editStudentPage,
    Element: EditStudentPage,
  },
];
