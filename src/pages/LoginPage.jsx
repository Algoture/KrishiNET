import { PasswordInput, SubmitBtn, InputField, Already } from "../Index";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setshowPassword] = useState(false);
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
          <InputField
            label="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            label="Password"
            value={password}
            showPassword={showPassword}
            toggleShowPassword={() => setshowPassword(!showPassword)}
            onChange={(e) => setPassword(e.target.value)}
          />
          <NavLink to="/forgotPassword" className="text-right text-link">
            Forgot Password?
          </NavLink>

          <SubmitBtn text="Login" />
        </form>
        <Already log={true} />
      </div>
    </div>
  );
};

export default LoginPage;
