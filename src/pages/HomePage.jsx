import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
const HomePage = () => {

  const { user, logoutUser } = useAuth();


  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to KrishiNET </h1>
      <div className="flex gap-4 mt-4">


        <NavLink
          to="/olamap"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Ola Map
        </NavLink>

        <NavLink
          to="/contract"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Create Contract
        </NavLink>

        <NavLink
          to="/profile"
          className="px-4 py-2 bg-yellow-400 text-black rounded-md"
        >
          Profile
        </NavLink>

        {
          user ? (
            <button onClick={logoutUser}
              className="px-4 py-2 bg-yellow-400 text-black rounded-md"
            > logout</button>
          ) : (
            <NavLink
              to="/login"
              className="px-4 py-2 bg-yellow-400 text-black rounded-md"
            >
              Login
            </NavLink>
          )}

      </div>
    </div>
  );
};

export default HomePage;
