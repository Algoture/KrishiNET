import { NavLink } from "react-router-dom";
const Already = ({ log }) => {
  return (
    <p className="text-center text-gray-600 mt-4">
      {log ? "Don't have an account?" : "Already have an account?"}
      <NavLink to={log ? "/register" : "/login"} className="text-link">
        {" "}
        {log ? "Register" : "Login"}
      </NavLink>
    </p>
  );
};

export default Already;
