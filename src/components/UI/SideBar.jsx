import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../Index";
import ChatIcon from "@mui/icons-material/Chat";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import MapIcon from "@mui/icons-material/Map";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
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
        className={`bg-white shadow-xl h-screen fixed top-0 left-0 min-w-56 font-[sans-serif] overflow-hidden z-40
                        ${sidebarOpen ? "block" : "hidden"} lg:block`}
      >
        <div className="relative flex flex-col h-full">
          <div className="flex items-center justify-center h-20 shadow-md">
            <h1 className="text-3xl">
              Krishi<span className="text-accent">NET</span>
            </h1>
          </div>

          <ul className="flex flex-col py-4">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-white bg-accent" : "text-black"
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
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <ChatIcon />
                </span>
                <span className="text-sm font-medium">Chat</span>
              </div>
            </li>

            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-white bg-accent" : "text-black"
                }`
              }
            >
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <PersonIcon />
                </span>
                Profile
              </div>
            </NavLink>

            <li className="cursor-pointer">
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <NotificationsIcon />
                </span>
                <span className="text-sm font-medium">Notifications</span>
                <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">
                  5
                </span>
              </div>
            </li>

            <NavLink
              to="/olamap"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-white bg-accent" : "text-black"
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
              to="/feed"
              className={({ isActive }) =>
                `text-sm font-medium ${
                  isActive ? "text-white bg-accent" : "text-black"
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
              <div className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-black hover:text-gray-800">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg ">
                  <LogoutIcon />
                </span>
                <button onClick={logoutUser} className="text-sm font-medium">
                  Logout
                </button>
              </div>
            </li>
          </ul>
          <div className="flex cursor-pointer items-center w-full absolute bottom-0 h-12 gap-2">
            <span className="inline-flex items-center justify-center h-12 ml-2 text-lg ">
              <PermIdentityIcon />
            </span>
            <div className="flex justify-center items-center">
              <p className="text-sm text-black">{name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;