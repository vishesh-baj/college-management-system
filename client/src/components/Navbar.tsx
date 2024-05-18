import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { toggleSidebar } from "../features/appState/appStateSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const handleSidebarToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <div className="bg-base-300 p-2 flex items-center justify-between">
      <button
        onClick={handleSidebarToggle}
        className="btn btn-square btn-ghost"
      >
        <RxHamburgerMenu />
      </button>
      <button className="btn btn-ghost btn-square">
        <RiLogoutCircleRLine />
      </button>
    </div>
  );
};

export default Navbar;
