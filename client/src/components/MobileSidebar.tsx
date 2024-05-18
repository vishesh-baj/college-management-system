import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { IoCloseOutline } from "react-icons/io5";
import { toggleSidebar } from "../features/appState/appStateSlice";
import { NavLink } from "react-router-dom";
import { sidebarMapping } from "../mapping";

const MobileSidebar = () => {
  const dispatch = useDispatch();
  const sidebarState = useSelector(
    (state: RootState) => state.appState.sidebarToggle
  );
  const handleSidebarClose = () => dispatch(toggleSidebar());

  return (
    <div className="md:hidden">
      <div
        className={`h-screen absolute top-0 left-0 w-3/4 bg-base-200 transition-transform duration-300 ease-in-out ${
          sidebarState ? "translate-x-0" : "-translate-x-full"
        } z-20`}
      >
        <div className="flex justify-end p-2">
          <button onClick={handleSidebarClose} className="btn btn-square">
            <IoCloseOutline />
          </button>
        </div>
        <div>
          <ul className="menu bg-base-200 w-full rounded-box">
            {sidebarMapping.map(({ id, title, link, Icon, children }) => {
              return children ? (
                <li key={id}>
                  <details open>
                    <summary>
                      <Icon className="text-xl" />
                      {title}
                    </summary>
                    <ul>
                      {children.map((subMenu) => (
                        <li onClick={handleSidebarClose} key={subMenu.id}>
                          <NavLink to={subMenu.link}>
                            <subMenu.Icon className="text-lg" />
                            <span className="text-nowrap overflow-hidden overflow-ellipsis">
                              {subMenu.title}
                            </span>
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li onClick={handleSidebarClose} key={id}>
                  <NavLink
                    className={`flex ${sidebarState ? "" : "justify-center"}`}
                    to={link}
                  >
                    <Icon className="text-lg" />
                    {sidebarState && (
                      <span className="text-nowrap overflow-hidden overflow-ellipsis">
                        {title}
                      </span>
                    )}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* overlay */}
      {sidebarState && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out z-10"
          onClick={handleSidebarClose}
        ></div>
      )}
    </div>
  );
};

export default MobileSidebar;
