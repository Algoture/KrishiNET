import {
  HomePage,
  LandingPage,
  LoginPage,
  RegisterPage,
  AuthProvider,
  Home,
} from "./Index";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContractForm from "./components/ContractForm";
import OlaMap from "./pages/OlaMap";
import PrivateRoutes from "./utils/PrivateRoutes";
import Profile from "./components/Profile";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/landingPage" element={<LandingPage />} />

            <Route path="/" element={<HomePage />} />
            <Route path="/homie" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contract" element={<ContractForm />} />
            <Route path="/olamap" element={<OlaMap />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
