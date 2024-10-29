import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  AuthProvider,
  Recommendations,
  Error404Page,
} from "./Index";
import ContractForm from "./components/Contract/ContractForm";
import OlaMap from "./pages/OlaMap";
import PrivateRoutes from "./utils/PrivateRoutes";
import ProfilePage from "./pages/ProfilePage";
import BuyerDashboard from "./components/Buyer/BuyerDashboard";
import Feeds from "./components/Feeds";
import PostForm from "./components/Form/PostForm";
import DashboardPage from "./pages/DashboardPage";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/recommend" element={<Recommendations />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/contract" element={<ContractForm />} />
            <Route path="/olamap" element={<OlaMap />} />
            <Route path="/feed" element={<Feeds />} />
            <Route path="/newpost" element={<PostForm />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
