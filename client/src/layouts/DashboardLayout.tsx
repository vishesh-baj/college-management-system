import { FC } from "react";
import { IReactChildren } from "../types";
import { Header, MobileSidebar, Navbar, Sidebar } from "../components";
import { useLocation } from "react-router-dom";

const DashboardLayout: FC<IReactChildren> = ({ children }) => {
  const location = useLocation();
  return (
    <div>
      <MobileSidebar />
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 ">
          <Navbar />
          <div className="p-4">
            <Header
              title={location.pathname
                .split("/")
                [location.pathname.split("/").length - 1].split("-")
                .join(" ")
                .toUpperCase()}
            />

            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
