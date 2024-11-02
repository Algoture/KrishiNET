import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  AuthProvider,
  Recommendations,
  Error404Page,
  DashboardPage,
  ProfilePage,
  OlaMap,
} from "./Index";
import ContractForm from "./components/Contract/ContractForm";
import PrivateRoutes from "./utils/PrivateRoutes";
import BuyerDashboard from "./components/Buyer/BuyerDashboard";
import Feeds from "./components/Feed/Feeds";
import FeedPostForm from "./components/Feed/FeedPostForm";
import CropCategories from "./components/UI/CropCategories";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/category" element={<CropCategories />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/recommend" element={<Recommendations />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/contract" element={<ContractForm />} />
            <Route path="/olamap" element={<OlaMap />} />
            <Route path="/feed" element={<Feeds />} />
            <Route path="/newpost" element={<FeedPostForm />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
