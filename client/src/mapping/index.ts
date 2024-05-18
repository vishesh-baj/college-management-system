import { nanoid } from "nanoid";
import { PATHS } from "../routes/paths";
import { IoHomeOutline } from "react-icons/io5";
import { PiStudent, PiChalkboardTeacherLight } from "react-icons/pi";
import { FiEdit2 } from "react-icons/fi";
import { IoPersonAddOutline } from "react-icons/io5";
export const sidebarMapping = [
  {
    id: nanoid(),
    title: "Home",
    link: PATHS.dashboardHomePage,
    Icon: IoHomeOutline,
  },
  {
    id: nanoid(),
    title: "Faculty",
    link: PATHS.facultyDashboardPage,
    Icon: PiChalkboardTeacherLight,
    children: [
      {
        id: nanoid(),
        title: "Create Faculty",
        link: PATHS.createFacultyPage,
        Icon: IoPersonAddOutline,
      },
      {
        id: nanoid(),
        title: "Update Faculty",
        link: PATHS.editFacultyPage,
        Icon: FiEdit2,
      },
    ],
  },
  {
    id: nanoid(),
    title: "Student",
    link: PATHS.studentDashboardPage,
    Icon: PiStudent,
    children: [
      {
        id: nanoid(),
        title: "Create Student",
        link: PATHS.createStudentPage,
        Icon: IoPersonAddOutline,
      },
      {
        id: nanoid(),
        title: "Update Student",
        link: PATHS.editStudentPage,
        Icon: FiEdit2,
      },
    ],
  },
];
