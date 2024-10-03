import { NavLink } from "react-router-dom";
import { useAuth } from "../Index";
const HomePage = () => {
  const { user, logoutUser } = useAuth();

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">
        Welcome to Krishi<span className="text-accent">NET</span>
      </h1>
      <div className="flex gap-4 mt-5 flex-wrap p-4">
        <NavLink
          to="/olamap"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Ola Map
        </NavLink>

        <NavLink
          to="/contract"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Create Contract
        </NavLink>

        <NavLink
          to="/profile"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Profile
        </NavLink>

        <NavLink
          to="/buyer"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Buyer DashBoard
        </NavLink>
        {/* <NavLink
          to="/landingPage"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Landing Page
        </NavLink> */}

        {user ? (
          <button
            onClick={logoutUser}
            className="px-4 py-2 bg-accent text-black rounded-md"
          >
            Logout
          </button>
        ) : (
          <NavLink to="/" className="px-4 py-2 bg-accent text-black rounded-md">
            Get Started
          </NavLink>
        )}

        <NavLink
          to="/recommend"
          className="px-4 py-2 bg-accent text-black rounded-md"
        >
          Get Recommendations
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
