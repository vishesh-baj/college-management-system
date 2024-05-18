import { useSelector } from "react-redux";
import { RootState } from "../store";
import { NavLink } from "react-router-dom";
import { sidebarMapping } from "../mapping";

const Sidebar = () => {
  const sidebarState = useSelector(
    (state: RootState) => state.appState.sidebarToggle
  );

  return (
    <div className="hidden md:flex">
      <aside
        className={`bg-base-200 transition-width ease-in-out duration-300 ${
          sidebarState ? "w-60" : "w-20"
        }`}
      >
        <div className="flex items-center bg-base-300 justify-center h-[64px]">
          <button className="btn btn-ghost btn-square flex-1">LOGO</button>
        </div>
        {/* sidebar menu */}
        <ul className="menu bg-base-200 rounded-box">
          {sidebarMapping.map(({ id, title, link, Icon, children }) => {
            return children ? (
              <li key={id}>
                {sidebarState ? (
                  <details open>
                    <summary>
                      <Icon className="text-xl" />
                      {title}
                    </summary>
                    <ul>
                      {children.map((subMenu) => (
                        <li key={subMenu.id}>
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
                ) : (
                  <li className={`dropdown dropdown-right m-0 p-0 `}>
                    <a
                      tabIndex={0}
                      className="hover:bg-transparent focus:bg-transparent"
                    >
                      <Icon className="text-lg ml-2" />
                    </a>
                    <ul
                      tabIndex={0}
                      className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                    >
                      {children.map((subMenu) => (
                        <li key={subMenu.id}>
                          <NavLink to={subMenu.link}>{subMenu.title}</NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                )}
              </li>
            ) : (
              <li key={id}>
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
      </aside>
    </div>
  );
};

export default Sidebar;
