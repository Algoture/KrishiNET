import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to KrishiNET</h1>
      <div className="flex gap-4 mt-4">
        <NavLink
          to="/auth"
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Register
        </NavLink>
        <NavLink
          to="/contract"
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Create Contract
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;
