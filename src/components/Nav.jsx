import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="bg-white h-fit">
      <div className="flex flex-wrap justify-between ml-10 mr-10">
        <div className="flex flex-row p-4 items-center gap-10">
          <NavLink to="/" className="text-4xl ">
            Krishi<span className="text-accent">NET</span>
          </NavLink>
          <NavLink to="/" className="text-base hover:text-accent">Home</NavLink>
          <NavLink to="/" className="text-base hover:text-accent">Buyer</NavLink>
          <NavLink to="/" className="text-base hover:text-accent">Farmer</NavLink>
        </div>
        <div className="flex flex-row p-4 items-center gap-5">
          <NavLink to="/login" className="text-base hover:text-accent">Login</NavLink>
          <NavLink to="/register" className="text-base hover:text-accent">Register</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
