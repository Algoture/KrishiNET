import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import {
  PasswordInput,
  SubmitBtn,
  InputField,
  Already,
  useAuth,
} from "../Index";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const Loginform = useRef(null);

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const userInfo = { email, password };
    try {
      await loginUser(userInfo);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-box w-96   z-10">
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

          <SubmitBtn text="Login" loading={loading} />
        </form>
        <Already log={true} />
      </div>
      <img
        src="signIn.png"
        alt="signInImg"
        className="absolute right-0 h-full bottom-0-z-50"
      />
    </div>
  );
};

export default LoginPage;
