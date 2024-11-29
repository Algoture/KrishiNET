import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth, PersonIcon } from "../../Index";
import ChatIcon from "@mui/icons-material/Chat";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import CreateIcon from "@mui/icons-material/Create";
import MapIcon from "@mui/icons-material/Map";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import RecommendIcon from "@mui/icons-material/Recommend";
import MenuIcon from "@mui/icons-material/Menu";
const SideBar = () => {
  const { logoutUser, user } = useAuth();
  const [name, setName] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (user) setName(user.name);
  }, [user]);

  return (
    <>
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MenuIcon className="text-2xl text-gray-800" />
        </button>
      </div>

      <div
        className={`bg-white shadow-2xl  h-screen fixed top-0 left-0 min-w-56 font-[sans-serif] overflow-hidden z-40
                        ${sidebarOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl font-bold">
              Krishi<span className="text-accent">NET</span>
            </h1>
          </div>

          <ul className="flex flex-col py-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gray-800 ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <DashboardIcon />
                </span>
                Dashboard
              </div>
            </NavLink>
            <li className="cursor-pointer">
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-unfocused hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <NotificationsIcon />
                </span>
                <span className="text-sm font-medium">Notifications</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  99+
                </span>
              </div>
            </li>

            <NavLink
              to="/olamap"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <MapIcon />
                </span>
                Map
              </div>
            </NavLink>

            <NavLink
              to="/newpost"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gray-800 ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <CreateIcon />
                </span>
                Create Contract
              </div>
            </NavLink>

            <NavLink
              to="/contract"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gray-800 ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <ArchitectureIcon />
                </span>
                Create Contract
              </div>
            </NavLink>

            <NavLink
              to="/recommend"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gray-800 ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <RecommendIcon />
                </span>
                Get Recommendations
              </div>
            </NavLink>

            <NavLink
              to="/feed"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-gray-800 ${
                  isActive ? "bg-accent text-black" : "text-unfocused"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <DynamicFeedIcon />
                </span>
                Feed
              </div>
            </NavLink>

            <li className="cursor-pointer">
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-unfocused hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <LogoutIcon />
                </span>
                <button onClick={logoutUser} className="text-sm font-medium">
                  Logout
                </button>
              </div>
            </li>
          </ul>

          <div className=" border-t-2  flex cursor-pointer items-center w-full absolute bottom-1 p-1 h-12 gap-2">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-sm flex w-full font-medium ${
                  isActive ? "bg-accent" : "text-black"
                }`
              }
            >
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                <PersonIcon />
              </span>
              <div className="flex justify-center items-center">
                <p className="text-sm text-black">{name}</p>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
