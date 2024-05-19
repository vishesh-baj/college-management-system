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
    access: ["admin"],
  },
  {
    key: nanoid(),
    path: PATHS.facultyDashboardPage,
    Element: FacultyDashboardPage,
    access: ["admin"],
  },
  {
    key: nanoid(),
    path: PATHS.createFacultyPage,
    Element: CreateFacultyPage,
    access: ["admin"],
  },
  {
    key: nanoid(),
    path: PATHS.editFacultyPage,
    Element: EditFacultyPage,
    access: ["admin"],
  },
  {
    key: nanoid(),
    path: PATHS.studentDashboardPage,
    Element: StudentDashboardPage,
    access: ["admin", "faculty"],
  },
  {
    key: nanoid(),
    path: PATHS.createStudentPage,
    Element: CreateStudentPage,
    access: ["admin", "faculty"],
  },
  {
    key: nanoid(),
    path: PATHS.editStudentPage,
    Element: EditStudentPage,
    access: ["admin", "faculty"],
  },
];
