// Form Components
import CitySelect from "./components/Form/CitySelect";
import SubmitBtn from "./components/Form/SubmitBtn";
import StateSelect from "./components/Form/StateSelect";
import PasswordInput from "./components/Form/PasswordInput";
import InputField from "./components/Form/InputField";
import Already from "./components/Form/Already";
export {
  Already,
  CitySelect,
  SubmitBtn,
  StateSelect,
  PasswordInput,
  InputField,
};

// Pages:
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Error404Page from "./pages/Error404Page";
export { HomePage, LandingPage, LoginPage, RegisterPage, Error404Page };

// Utils:
import { AuthProvider, useAuth } from "./utils/AuthContext";
import { getRecommendations } from "./utils/Recommendations";
export { AuthProvider, useAuth, getRecommendations };

// Components:
import Nav from "./components/Nav";
import Recommendations from "./components/Recommendation/Recommendations";
import BackBtn from "./components/UI/BackBtn";
export { Nav, Recommendations, BackBtn };
