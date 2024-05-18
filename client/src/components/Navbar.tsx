import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { toggleSidebar } from "../features/appState/appStateSlice";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../routes/paths";
const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate(PATHS.landingPage);
  };

  return (
    <div className="bg-base-300 p-2 flex items-center justify-between">
      <button
        onClick={handleSidebarToggle}
        className="btn btn-square btn-ghost"
      >
        <RxHamburgerMenu />
      </button>
      <button onClick={handleLogout} className="btn btn-ghost btn-square">
        <RiLogoutCircleRLine />
      </button>
    </div>
  );
};

export default Navbar;
