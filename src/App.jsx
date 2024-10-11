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
import ContractForm from "./components/ContractForm";
import OlaMap from "./pages/OlaMap";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./components/Profile";
import BuyerDashboard from "./components/Buyer/BuyerDashboard";
import Feeds from "./components/Feeds";
import PostForm from "./components/Form/PostForm";
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
            <Route path="/recommend" element={<Recommendations />} />
            <Route path="/profile" element={<Profile />} />
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
