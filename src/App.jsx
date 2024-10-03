import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  AuthProvider,
  RecommendCard,
  Error404Page,
} from "./Index";
import ContractForm from "./components/ContractForm";
import OlaMap from "./pages/OlaMap";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./components/Profile";
import BuyerDashboard from "./components/Buyer/BuyerDashboard";
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
            <Route path="/recommend" element={<RecommendCard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/buyer" element={<BuyerDashboard />} />
            <Route path="/contract" element={<ContractForm />} />
            <Route path="/olamap" element={<OlaMap />} />
            <Route path="*" element={<Error404Page />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
