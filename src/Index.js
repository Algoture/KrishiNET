// Form Components
import CitySelect from "./components/Form/CitySelect";
import SubmitBtn from "./components/Form/SubmitBtn";
import StateSelect from "./components/Form/StateSelect";
import PasswordInput from "./components/Form/PasswordInput";
import InputField from "./components/Form/InputField";
import InputFileUpload from "./components/Form/InputFileUpload";
import Already from "./components/Form/Already";
import CategorySelect from "./components/Form/CategorySelect";
export {
  Already,
  CitySelect,
  SubmitBtn,
  StateSelect,
  PasswordInput,
  InputField,
  InputFileUpload,
  CategorySelect,
};

// Pages:
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Error404Page from "./pages/Error404Page";
import ProfilePage from "./pages/ProfilePage";
import OlaMap from "./pages/OlaMap";
import DashboardPage from "./pages/DashboardPage";
export {
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  Error404Page,
  ProfilePage,
  OlaMap,
  DashboardPage,
};

// Utils:
import {
  databaseId,
  databases,
  postCollection,
  storage,
  storageBucketId,
  collectionId,
  account,
} from "./utils/appwriteConfig";
import { cropData, cropsCategories } from "./utils/Data";
import { AuthProvider, useAuth } from "./utils/AuthContext";
import { getRecommendations } from "./utils/Recommendations";
export {
  AuthProvider,
  useAuth,
  account,
  getRecommendations,
  databaseId,
  databases,
  storage,
  collectionId,
  postCollection,
  storageBucketId,
  cropData,
  cropsCategories,
};

// Recommendations Components:
import Recommendations from "./components/Recommendation/Recommendations";
export { Recommendations };

// UI Components:
import SideBar from "./components/UI/SideBar";
import Toast from "./components/UI/Toast";
export { SideBar, Toast };

// Material UI Components:
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import AddIcon from "@mui/icons-material/Add";
import {
  Skeleton,
  Button,
  Rating,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
} from "@mui/material";
export {
  AddIcon,
  AccountCircleIcon,
  PhoneIcon,
  MailIcon,
  Skeleton,
  Button,
  Rating,
  PersonIcon,
  PlaceIcon,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
};
