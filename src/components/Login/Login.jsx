import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import { TextField, Button } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const Loginform = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInfo = { email, password };

    loginUser(userInfo);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-box w-96 relative">
        <h1 className="text-3xl font-semibold mb-2 text-center">Login</h1>
        <form
          className="flex flex-col gap-4"
          ref={Loginform}
          onSubmit={handleSubmit}
        >
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-lg"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            className="w-full p-3 border rounded-lg"
          />
          <NavLink to="/forgotPassword" className="text-right text-link">
            Forgot Password?
          </NavLink>

          <Button
            type="submit"
            variant="contained"
            className="w-full p-3 rounded-lg"
            sx={{
              backgroundColor: "#70e000",
              color: "black",
            }}
          >
            Login
          </Button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <NavLink to="/register" className="text-link">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
