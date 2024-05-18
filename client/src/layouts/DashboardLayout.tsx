import { FC } from "react";
import { IReactChildren } from "../types";
import { MobileSidebar, Navbar, Sidebar } from "../components";

const DashboardLayout: FC<IReactChildren> = ({ children }) => {
  return (
    <div>
      <MobileSidebar />
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className="flex flex-col flex-1 ">
          <Navbar />
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
